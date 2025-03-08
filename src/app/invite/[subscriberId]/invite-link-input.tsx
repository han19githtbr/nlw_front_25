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
  const placeholderRef = useRef<HTMLDivElement>(null) // Adicionando ref para o placeholder
  
  function copyInviteLink() {
    navigator.clipboard.writeText(inviteLink)
    setShowSucessMessage(true)
    setTimeout(() => {
      setShowSucessMessage(false)
    }, 3000)
  }

  useEffect(() => {
    if (showSucessMessage && placeholderRef.current && messageRef.current) {
      const placeholderRect = placeholderRef.current.getBoundingClientRect()
      const parentRect = placeholderRef.current.parentElement?.getBoundingClientRect()

      if (parentRect) {
        setMessagePosition({
          top: placeholderRect.top - parentRect.top,
          left: placeholderRect.left - parentRect.left,
        })
      }
    }
  }, [showSucessMessage])

  const [messagePosition, setMessagePosition] = useState({ top: -30, left: 160 })


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
            padding: "2px 16px",
            borderRadius: "4px",
            fontSize: "14px",
            zIndex: 10, // Garante que a mensagem fique sobre outros elementos
            whiteSpace: "nowrap",
          }}
        >
          Link copiado com sucesso!
        </div>
      )}
    </div>
  )
}
