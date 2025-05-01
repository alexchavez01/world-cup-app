import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, Clock, Users } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white font-bold">
              ⚽️
            </div>
            <h1 className="text-xl font-bold">FanZone</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Matches
            </Button>
            <Button variant="ghost" size="sm">
              Teams
            </Button>
            <Button variant="ghost" size="sm">
              News
            </Button>
            <Button size="sm">Create Watch Party</Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Today's Matches</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {matches.map((match) => (
              <Card key={match.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="p-4 bg-white">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CalendarDays className="h-4 w-4" />
                        <span>{match.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{match.time}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                          <img
                            src={match.team1.flag || "/placeholder.svg"}
                            alt={match.team1.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="font-semibold">{match.team1.name}</span>
                      </div>
                      <span className="text-lg font-bold">vs</span>
                      <div className="flex items-center gap-3">
                        <span className="font-semibold">{match.team2.name}</span>
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                          <img
                            src={match.team2.flag || "/placeholder.svg"}
                            alt={match.team2.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>{match.watchParties} watch parties</span>
                      </div>
                      <Link href={`/watch-party/${match.id}`}>
                        <Button size="sm" variant="outline">
                          Join a Watch Party
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Active Watch Parties</h2>
          <Tabs defaultValue="all">
            <TabsList className="mb-6">
              <TabsTrigger value="all">All Parties</TabsTrigger>
              <TabsTrigger value="friends">Friends' Parties</TabsTrigger>
              <TabsTrigger value="popular">Popular</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {watchParties.map((party) => (
                  <Card key={party.id} className="overflow-hidden hover:shadow-md transition-shadow">
                    <CardContent className="p-0">
                      <div className="relative h-40 bg-gray-200">
                        <img
                          src={party.coverImage || "/placeholder.svg"}
                          alt={party.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                          <h3 className="text-white font-bold">{party.name}</h3>
                          <div className="flex items-center gap-2 text-white/80 text-sm">
                            <Users className="h-4 w-4" />
                            <span>{party.members} watching</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                            <img
                              src={party.host.avatar || "/placeholder.svg"}
                              alt={party.host.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span className="text-sm font-medium">{party.host.name}</span>
                        </div>
                        <Link href={`/watch-party/${party.matchId}/${party.id}`}>
                          <Button size="sm">Join</Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>
    </div>
  )
}

// Sample data
const matches = [
  {
    id: "match-1",
    date: "Nov 21, 2023",
    time: "10:00 AM",
    team1: {
      name: "Brazil",
      flag: "/placeholder.svg?height=40&width=40",
    },
    team2: {
      name: "France",
      flag: "/placeholder.svg?height=40&width=40",
    },
    watchParties: 24,
  },
  {
    id: "match-2",
    date: "Nov 21, 2023",
    time: "1:00 PM",
    team1: {
      name: "Argentina",
      flag: "/placeholder.svg?height=40&width=40",
    },
    team2: {
      name: "Germany",
      flag: "/placeholder.svg?height=40&width=40",
    },
    watchParties: 18,
  },
  {
    id: "match-3",
    date: "Nov 21, 2023",
    time: "4:00 PM",
    team1: {
      name: "Spain",
      flag: "/placeholder.svg?height=40&width=40",
    },
    team2: {
      name: "England",
      flag: "/placeholder.svg?height=40&width=40",
    },
    watchParties: 15,
  },
]

const watchParties = [
  {
    id: "party-1",
    matchId: "match-1",
    name: "Brazil Fans Unite!",
    coverImage: "/placeholder.svg?height=160&width=400",
    members: 42,
    host: {
      name: "Carlos",
      avatar: "/placeholder.svg?height=32&width=32",
    },
  },
  {
    id: "party-2",
    matchId: "match-1",
    name: "Football Fanatics",
    coverImage: "/placeholder.svg?height=160&width=400",
    members: 28,
    host: {
      name: "Sophie",
      avatar: "/placeholder.svg?height=32&width=32",
    },
  },
  {
    id: "party-3",
    matchId: "match-2",
    name: "Argentina Supporters",
    coverImage: "/placeholder.svg?height=160&width=400",
    members: 35,
    host: {
      name: "Leo",
      avatar: "/placeholder.svg?height=32&width=32",
    },
  },
]

