"use client"

import { useState, useEffect } from "react"
import { PiggyBank, Target, History, Minus, RotateCcw, Edit3, Check, X, Plus, Trash2, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { LanguageSelector } from "@/components/language-selector"
import { useLanguage } from "@/hooks/useLanguage"

interface HistoryEntry {
  id: string
  date: string
  amount: number
  type: "add" | "remove"
}

interface Milestone {
  id: string
  name: string
  price: number
  achieved: boolean
}

interface SavedData {
  balance: number
  goalName: string
  milestones: Milestone[]
  history: HistoryEntry[]
}

export default function MaCagnotteDigitale() {
  const { t, isRTL } = useLanguage()
  const [balance, setBalance] = useState(0)
  const [goalName, setGoalName] = useState("PC Gaming")
  const [milestones, setMilestones] = useState<Milestone[]>([
    { id: "1", name: "Processeur", price: 70, achieved: false },
    { id: "2", name: "Carte mère", price: 60, achieved: false },
  ])
  const [history, setHistory] = useState<HistoryEntry[]>([])
  const [isEditingGoal, setIsEditingGoal] = useState(false)
  const [tempGoalName, setTempGoalName] = useState("")
  const [tempMilestones, setTempMilestones] = useState<Milestone[]>([])
  const [showHistory, setShowHistory] = useState(false)
  const [animatingCoins, setAnimatingCoins] = useState<number[]>([])

  // Calculer le total des paliers
  const totalGoal = milestones.reduce((sum, milestone) => sum + milestone.price, 0)

  // Charger les données depuis localStorage
  useEffect(() => {
    const savedData = localStorage.getItem("cagnotte-data")
    if (savedData) {
      const data: SavedData = JSON.parse(savedData)
      setBalance(data.balance || 0)
      setGoalName(data.goalName || "PC Gaming")
      setMilestones(
        data.milestones || [
          { id: "1", name: "Processeur", price: 70, achieved: false },
          { id: "2", name: "Carte mère", price: 60, achieved: false },
        ],
      )
      setHistory(data.history || [])
    }
  }, [])

  // Mettre à jour les paliers atteints
  useEffect(() => {
    let runningTotal = 0
    const updatedMilestones = milestones.map((milestone) => {
      runningTotal += milestone.price
      return {
        ...milestone,
        achieved: balance >= runningTotal,
      }
    })

    if (JSON.stringify(updatedMilestones) !== JSON.stringify(milestones)) {
      setMilestones(updatedMilestones)
    }
  }, [balance, milestones])

  // Sauvegarder dans localStorage
  const saveData = (newBalance: number, newHistory: HistoryEntry[], newMilestones?: Milestone[]) => {
    const data: SavedData = {
      balance: newBalance,
      goalName,
      milestones: newMilestones || milestones,
      history: newHistory,
    }
    localStorage.setItem("cagnotte-data", JSON.stringify(data))
  }

  // Animation de pièce qui tombe
  const triggerCoinAnimation = (amount: number) => {
    const coinId = Date.now()
    setAnimatingCoins((prev) => [...prev, coinId])

    setTimeout(() => {
      setAnimatingCoins((prev) => prev.filter((id) => id !== coinId))
    }, 1000)
  }

  // Ajouter de l'argent
  const addMoney = (amount: number) => {
    const newBalance = balance + amount
    const newEntry: HistoryEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleString(isRTL ? "ar-SA" : "fr-FR"),
      amount,
      type: "add",
    }
    const newHistory = [newEntry, ...history]

    setBalance(newBalance)
    setHistory(newHistory)
    saveData(newBalance, newHistory)
    triggerCoinAnimation(amount)
  }

  // Retirer de l'argent
  const removeMoney = (amount: number) => {
    const newBalance = Math.max(0, balance - amount)
    const actualAmount = balance - newBalance

    if (actualAmount > 0) {
      const newEntry: HistoryEntry = {
        id: Date.now().toString(),
        date: new Date().toLocaleString(isRTL ? "ar-SA" : "fr-FR"),
        amount: actualAmount,
        type: "remove",
      }
      const newHistory = [newEntry, ...history]

      setBalance(newBalance)
      setHistory(newHistory)
      saveData(newBalance, newHistory)
    }
  }

  // Réinitialiser
  const resetCagnotte = () => {
    setBalance(0)
    setHistory([])
    saveData(0, [])
  }

  // Modifier l'objectif et les paliers
  const startEditingGoal = () => {
    setTempGoalName(goalName)
    setTempMilestones([...milestones])
    setIsEditingGoal(true)
  }

  const addMilestone = () => {
    const newMilestone: Milestone = {
      id: Date.now().toString(),
      name: "",
      price: 0,
      achieved: false,
    }
    setTempMilestones([...tempMilestones, newMilestone])
  }

  const updateMilestone = (id: string, field: "name" | "price", value: string | number) => {
    setTempMilestones(
      tempMilestones.map((milestone) => (milestone.id === id ? { ...milestone, [field]: value } : milestone)),
    )
  }

  const removeMilestone = (id: string) => {
    setTempMilestones(tempMilestones.filter((milestone) => milestone.id !== id))
  }

  const saveGoal = () => {
    const validMilestones = tempMilestones.filter((m) => m.name.trim() && m.price > 0)
    setGoalName(tempGoalName)
    setMilestones(validMilestones)
    setIsEditingGoal(false)

    const data: SavedData = {
      balance,
      goalName: tempGoalName,
      milestones: validMilestones,
      history,
    }
    localStorage.setItem("cagnotte-data", JSON.stringify(data))
  }

  const cancelEditGoal = () => {
    setIsEditingGoal(false)
    setTempGoalName("")
    setTempMilestones([])
  }

  const progressPercentage = totalGoal > 0 ? Math.min((balance / totalGoal) * 100, 100) : 0
  const achievedMilestones = milestones.filter((m) => m.achieved).length

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 ${isRTL ? "rtl" : "ltr"}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-md mx-auto space-y-6">
        {/* Header avec sélecteur de langue */}
        <div className="text-center py-6">
          <div className="flex justify-between items-start mb-4">
            <div className="w-20"></div> {/* Spacer pour équilibrer */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">🪙 {t("title")}</h1>
              <p className="text-gray-600">{t("subtitle")}</p>
            </div>
            <div className="w-20 flex justify-end">
              <LanguageSelector />
            </div>
          </div>
        </div>

        {/* Tirelire et Solde */}
        <Card className="relative overflow-hidden">
          <CardContent className="text-center py-8 relative">
            {/* Animations de pièces */}
            {animatingCoins.map((coinId) => (
              <div
                key={coinId}
                className="absolute top-0 left-1/2 transform -translate-x-1/2 animate-bounce"
                style={{
                  animation: "coinFall 1s ease-in-out forwards",
                }}
              >
                <div className="w-8 h-8 bg-yellow-400 rounded-full border-2 border-yellow-500 flex items-center justify-center text-xs font-bold">
                  €
                </div>
              </div>
            ))}

            <div className="mb-4">
              <PiggyBank className="w-20 h-20 mx-auto text-pink-500 mb-4" />
            </div>

            <div className="text-4xl font-bold text-gray-800 mb-2">{balance.toFixed(2)} €</div>
            <p className="text-gray-600">{t("currentBalance")}</p>
          </CardContent>
        </Card>

        {/* Objectif et Paliers */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Target className="w-5 h-5 text-green-600" />
              {t("objective")} : {goalName}
              {!isEditingGoal && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={startEditingGoal}
                  className={`${isRTL ? "mr-auto" : "ml-auto"} p-1 h-auto`}
                >
                  <Edit3 className="w-4 h-4" />
                </Button>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {isEditingGoal ? (
              <div className="space-y-4">
                <Input
                  placeholder={t("objectiveName")}
                  value={tempGoalName}
                  onChange={(e) => setTempGoalName(e.target.value)}
                />

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">{t("milestones")}</h4>
                    <Button onClick={addMilestone} size="sm" variant="outline">
                      <Plus className="w-4 h-4 mr-1" />
                      {t("add")}
                    </Button>
                  </div>

                  {tempMilestones.map((milestone, index) => (
                    <div key={milestone.id} className="flex gap-2 items-center">
                      <Input
                        placeholder={t("componentName")}
                        value={milestone.name}
                        onChange={(e) => updateMilestone(milestone.id, "name", e.target.value)}
                        className="flex-1"
                      />
                      <Input
                        type="number"
                        placeholder={t("price")}
                        value={milestone.price || ""}
                        onChange={(e) => updateMilestone(milestone.id, "price", Number.parseFloat(e.target.value) || 0)}
                        className="w-20"
                      />
                      <Button
                        onClick={() => removeMilestone(milestone.id)}
                        size="sm"
                        variant="ghost"
                        className="p-1 h-auto text-red-500"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button onClick={saveGoal} size="sm" className="flex-1">
                    <Check className="w-4 h-4 mr-1" />
                    {t("validate")}
                  </Button>
                  <Button onClick={cancelEditGoal} variant="outline" size="sm" className="flex-1">
                    <X className="w-4 h-4 mr-1" />
                    {t("cancel")}
                  </Button>
                </div>
              </div>
            ) : (
              <>
                <div className="text-center mb-4">
                  <p className="text-2xl font-bold text-green-600">{totalGoal.toFixed(2)} €</p>
                  <p className="text-sm text-gray-600">
                    {achievedMilestones}/{milestones.length} {t("milestonesAchieved")}
                  </p>
                </div>

                {/* Paliers */}
                <div className="space-y-2">
                  {milestones.map((milestone, index) => {
                    const cumulativePrice = milestones.slice(0, index + 1).reduce((sum, m) => sum + m.price, 0)
                    return (
                      <div
                        key={milestone.id}
                        className={`flex items-center justify-between p-3 rounded-lg border-2 ${
                          milestone.achieved ? "bg-green-50 border-green-200" : "bg-gray-50 border-gray-200"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {milestone.achieved ? (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          ) : (
                            <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
                          )}
                          <span className={`font-medium ${milestone.achieved ? "text-green-800" : "text-gray-700"}`}>
                            {milestone.name}
                          </span>
                        </div>
                        <div className={`text-${isRTL ? "left" : "right"}`}>
                          <div className={`font-bold ${milestone.achieved ? "text-green-600" : "text-gray-600"}`}>
                            {milestone.price.toFixed(2)}€
                          </div>
                          <div className="text-xs text-gray-500">
                            {t("total")}: {cumulativePrice.toFixed(2)}€
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{t("progression")}</span>
                    <span>{progressPercentage.toFixed(1)}%</span>
                  </div>
                  <Progress value={progressPercentage} className="h-3" />
                  <p className="text-sm text-gray-600 text-center">
                    {t("remaining", { amount: Math.max(0, totalGoal - balance).toFixed(2) })}
                  </p>
                </div>
              </>
            )}
          </CardContent>
        </Card>

        {/* Boutons d'ajout */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">{t("addMoney")}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-3 mb-4">
              {[1, 2, 5, 10, 20, 50].map((amount) => (
                <Button
                  key={amount}
                  onClick={() => addMoney(amount)}
                  className="h-12 text-lg font-semibold bg-green-600 hover:bg-green-700"
                >
                  +{amount}€
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="grid grid-cols-3 gap-3">
          <Button
            onClick={() => removeMoney(10)}
            variant="outline"
            className="h-12 bg-red-50 border-red-200 text-red-700 hover:bg-red-100"
          >
            <Minus className="w-4 h-4 mr-1" />
            {t("withdraw")}
          </Button>

          <Button onClick={() => setShowHistory(!showHistory)} variant="outline" className="h-12">
            <History className="w-4 h-4 mr-1" />
            {t("history")}
          </Button>

          <Button
            onClick={resetCagnotte}
            variant="outline"
            className="h-12 bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"
          >
            <RotateCcw className="w-4 h-4 mr-1" />
            {t("reset")}
          </Button>
        </div>

        {/* Historique */}
        {showHistory && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">{t("transactionHistory")}</CardTitle>
            </CardHeader>
            <CardContent>
              {history.length === 0 ? (
                <p className="text-gray-500 text-center py-4">{t("noTransactions")}</p>
              ) : (
                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {history.map((entry) => (
                    <div key={entry.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="text-sm text-gray-600">{entry.date}</p>
                      </div>
                      <div className={`font-semibold ${entry.type === "add" ? "text-green-600" : "text-red-600"}`}>
                        {entry.type === "add" ? "+" : "-"}
                        {entry.amount.toFixed(2)}€
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>

      {/* Footer */}
      <footer className="text-center text-sm mt-8 text-gray-600">
        <img src="/assets/img/logo-senpai.png" alt="Logo Code no Senpaï" className="h-8 mx-auto mb-2" />
        <hr className="my-4 border-gray-300 w-1/2 mx-auto" />
        <p dangerouslySetInnerHTML={{ __html: t("footerText") }} />
      </footer>

      <style jsx>{`
        @keyframes coinFall {
          0% {
            transform: translateX(-50%) translateY(-20px);
            opacity: 1;
          }
          100% {
            transform: translateX(-50%) translateY(100px);
            opacity: 0;
          }
        }
        .rtl {
          direction: rtl;
        }
        .ltr {
          direction: ltr;
        }
      `}</style>
    </div>
  )
}
