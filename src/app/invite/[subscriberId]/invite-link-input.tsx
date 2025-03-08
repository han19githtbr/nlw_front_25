"use client"

import { useState, useRef, useEffect } from "react"
import { IconButton } from "@/components/icon-button"
import { InputField, InputIcon, InputRoot } from "@/components/input"
import { Copy, Link } from "lucide-react"

interface InviteLinkInputProps {
  inviteLink: string
}

export function InviteLinkInput({ inviteLink }: InviteLinkInputProps) {
  const [showSucessMessage, setShowSucessMessage] = useState(false)
  const inputRef = useRef<HTMLDivElement>(null)
  const messageRef = useRef<HTMLDivElement>(null)
  const [messagePosition, setMessagePosition] = useState({ top: 0, left: 0 })

  function copyInviteLink() {
    navigator.clipboard.writeText(inviteLink)
    setShowSucessMessage(true)
    setTimeout(() => {
      setShowSucessMessage(false)
    }, 3000)
  }

  useEffect(() => {
    if (showSucessMessage && inputRef.current && messageRef.current) {
      const inputRect = inputRef.current.getBoundingClientRect()
      const messageRect = messageRef.current.getBoundingClientRect()
      const parentRect = inputRef.current.parentElement?.getBoundingClientRect() // Obtendo o elemento pai

      if (parentRect) {
        setMessagePosition({
          top: inputRect.top - parentRect.top - messageRect.height -24, // Ajustando o top
          left: inputRect.left - parentRect.left, // Ajustando o left
        })
      }
    }
  }, [showSucessMessage])


  return (
    <div ref={inputRef} style={{ position: "relative" }}>
      <InputRoot>
        <InputIcon>
          <Link className="size-5" />
        </InputIcon>

        <InputField readOnly defaultValue={inviteLink} />

        <IconButton className="-mr-2" onClick={copyInviteLink}>
          <Copy className="size-5" />
        </IconButton>
      </InputRoot>

      {showSucessMessage && (
        <div
          ref={messageRef}
          style={{
            position: "absolute",
            top: messagePosition.top,
            left: messagePosition.left,
            backgroundColor: "#dcfce7", // Cor de fundo verde claro
            color: "#166534", // Cor do texto verde escuro
            padding: "2px 20px",
            borderRadius: "4px",
            fontSize: "14px",
            zIndex: 10, // Garante que a mensagem fique sobre outros elementos
          }}
        >
          Link copiado com sucesso!
        </div>
      )}
    </div>
  )
}
