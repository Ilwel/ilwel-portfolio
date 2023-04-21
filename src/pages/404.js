import DialogContext from "@/contexts/DialogContext"
import { useContext, useEffect } from "react"

export default function NotFound(){

  const { setDialog } = useContext(DialogContext)

  useEffect(() => { setDialog('Essa página não existe, famoso 404')}, [])

  return(
    <div>

    </div>
  )
}