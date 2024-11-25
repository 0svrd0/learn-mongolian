import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { useNavigate } from "react-router-dom"

export function CommandMenu() {
  const navigate = useNavigate()
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const routes = [
    { title: "Home", path: "/" },
    { title: "Learn", path: "/learn" },
    { title: "Games", path: "/games" },
    { title: "Stories", path: "/story" },
    // Add more routes as needed
  ]

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="p-0">
        <Command>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Navigation">
              {routes.map((route) => (
                <CommandItem
                  key={route.path}
                  onSelect={() => {
                    navigate(route.path)
                    setOpen(false)
                  }}
                >
                  {route.title}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  )
}
