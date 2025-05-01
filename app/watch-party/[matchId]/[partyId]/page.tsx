"use client"

import type React from "react"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, MessageSquare, Send, Share2, Users } from "lucide-react"
import Link from "next/link"

export default function WatchPartyPage() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      user: "Carlos",
      avatar: "/placeholder.svg?height=32&width=32",
      message: "What a game so far!",
      time: "10:05 AM",
    },
    {
      id: 2,
      user: "Maria",
      avatar: "/placeholder.svg?height=32&width=32",
      message: "That was so close!",
      time: "10:07 AM",
    },
    {
      id: 3,
      user: "John",
      avatar: "/placeholder.svg?height=32&width=32",
      message: "Brazil is playing really well today",
      time: "10:10 AM",
    },
  ])
  const [messageInput, setMessageInput] = useState("")

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (messageInput.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          user: "You",
          avatar: "/placeholder.svg?height=32&width=32",
          message: messageInput,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ])
      setMessageInput("")
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Button variant="ghost" size="icon" className="rounded-full">
                <ChevronLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white font-bold">
                WC
              </div>
              <div>
                <h1 className="text-lg font-bold">Brazil Fans Unite!</h1>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>Brazil vs France</span>
                  <span>•</span>
                  <span>Live</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="gap-2">
              <Users className="h-4 w-4" />
              <span>42</span>
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="aspect-video bg-black rounded-lg overflow-hidden relative">
            <img
              src="/placeholder.svg?height=480&width=854"
              alt="Match stream"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-red-600 text-white px-2 py-1 rounded text-sm font-medium">
              LIVE
            </div>
            <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
              42:15
            </div>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center">
              <div className="bg-black/70 text-white px-4 py-2 rounded-full text-lg font-bold">Brazil 2 - 1 France</div>
            </div>
          </div>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Match Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="summary">
                <TabsList className="mb-4">
                  <TabsTrigger value="summary">Summary</TabsTrigger>
                  <TabsTrigger value="stats">Detailed Stats</TabsTrigger>
                  <TabsTrigger value="lineups">Lineups</TabsTrigger>
                </TabsList>
                <TabsContent value="summary" className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="text-right">
                      <div className="text-3xl font-bold">2</div>
                      <div className="text-sm text-muted-foreground">Goals</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-medium">VS</div>
                    </div>
                    <div className="text-left">
                      <div className="text-3xl font-bold">1</div>
                      <div className="text-sm text-muted-foreground">Goals</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {stats.map((stat) => (
                      <div key={stat.name} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>{stat.team1}</span>
                          <span className="text-muted-foreground">{stat.name}</span>
                          <span>{stat.team2}</span>
                        </div>
                        <div className="flex h-2 bg-gray-100 rounded overflow-hidden">
                          <div className="bg-blue-600" style={{ width: `${stat.team1Percentage}%` }} />
                          <div className="bg-red-600" style={{ width: `${stat.team2Percentage}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="stats">
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="text-right">
                        <div className="text-xl font-bold">Brazil</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-medium">Stat</div>
                      </div>
                      <div className="text-left">
                        <div className="text-xl font-bold">France</div>
                      </div>
                    </div>

                    {detailedStats.map((stat, index) => (
                      <div key={index} className="grid grid-cols-3 gap-4 text-center py-2 border-b last:border-0">
                        <div className="text-right">{stat.team1}</div>
                        <div className="text-center text-sm text-muted-foreground">{stat.name}</div>
                        <div className="text-left">{stat.team2}</div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="lineups">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-bold mb-3 text-center">Brazil</h3>
                      <div className="space-y-2">
                        {brazilLineup.map((player) => (
                          <div key={player.number} className="flex items-center gap-3 p-2 bg-gray-50 rounded">
                            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                              {player.number}
                            </div>
                            <span>{player.name}</span>
                            {player.captain && (
                              <span className="text-xs bg-yellow-100 text-yellow-800 px-1 rounded">C</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold mb-3 text-center">France</h3>
                      <div className="space-y-2">
                        {franceLineup.map((player) => (
                          <div key={player.number} className="flex items-center gap-3 p-2 bg-gray-50 rounded">
                            <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                              {player.number}
                            </div>
                            <span>{player.name}</span>
                            {player.captain && (
                              <span className="text-xs bg-yellow-100 text-yellow-800 px-1 rounded">C</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card className="h-full flex flex-col">
            <CardHeader className="pb-3 flex-shrink-0">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  <span>Chat</span>
                </CardTitle>
                <div className="text-sm text-muted-foreground">42 viewers</div>
              </div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <div className="flex-1 overflow-y-auto mb-4 space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className="flex gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={message.avatar} />
                      <AvatarFallback>{message.user.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{message.user}</span>
                        <span className="text-xs text-muted-foreground">{message.time}</span>
                      </div>
                      <p className="text-sm">{message.message}</p>
                    </div>
                  </div>
                ))}
              </div>
              <form onSubmit={sendMessage} className="flex gap-2 mt-auto">
                <Input
                  placeholder="Type a message..."
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit" size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

// Sample data
const stats = [
  { name: "Possession", team1: "58%", team2: "42%", team1Percentage: 58, team2Percentage: 42 },
  { name: "Shots", team1: "12", team2: "8", team1Percentage: 60, team2Percentage: 40 },
  { name: "Shots on Target", team1: "5", team2: "3", team1Percentage: 62.5, team2Percentage: 37.5 },
  { name: "Corners", team1: "6", team2: "4", team1Percentage: 60, team2Percentage: 40 },
]

const detailedStats = [
  { name: "Possession", team1: "58%", team2: "42%" },
  { name: "Shots", team1: "12", team2: "8" },
  { name: "Shots on Target", team1: "5", team2: "3" },
  { name: "Corners", team1: "6", team2: "4" },
  { name: "Fouls", team1: "7", team2: "10" },
  { name: "Yellow Cards", team1: "1", team2: "2" },
  { name: "Red Cards", team1: "0", team2: "0" },
  { name: "Offsides", team1: "2", team2: "3" },
  { name: "Passes", team1: "423", team2: "312" },
  { name: "Pass Accuracy", team1: "89%", team2: "82%" },
]

const brazilLineup = [
  { number: 1, name: "Alisson", captain: false },
  { number: 2, name: "Danilo", captain: false },
  { number: 3, name: "Thiago Silva", captain: true },
  { number: 4, name: "Marquinhos", captain: false },
  { number: 5, name: "Casemiro", captain: false },
  { number: 6, name: "Alex Sandro", captain: false },
  { number: 7, name: "Paquetá", captain: false },
  { number: 8, name: "Fred", captain: false },
  { number: 9, name: "Richarlison", captain: false },
  { number: 10, name: "Neymar", captain: false },
  { number: 11, name: "Raphinha", captain: false },
]

const franceLineup = [
  { number: 1, name: "Lloris", captain: true },
  { number: 2, name: "Pavard", captain: false },
  { number: 3, name: "Varane", captain: false },
  { number: 4, name: "Koundé", captain: false },
  { number: 5, name: "Kanté", captain: false },
  { number: 6, name: "Tchouaméni", captain: false },
  { number: 7, name: "Griezmann", captain: false },
  { number: 8, name: "Pogba", captain: false },
  { number: 9, name: "Giroud", captain: false },
  { number: 10, name: "Mbappé", captain: false },
  { number: 11, name: "Dembélé", captain: false },
]

