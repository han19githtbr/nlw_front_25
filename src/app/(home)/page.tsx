import { Radio } from "lucide-react"
import Image from "next/image"
import logo from "../../assets/logo.svg"
import { SubscriptionForm } from "./subscription-form"
import { AnimatedText } from "@/components/animated-text"
import { PencilLineIcon } from "lucide-react"
import { Calendar } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-dvh flex flex-col justify-center gap-16">
      <div className="flex flex-col gap-8 items-center md:items-start">
        <Image className="animate-pulse" src={logo} alt="devstage" width={108.5} height={30} />

        <h1 className="text-4xl text-center leading-none font-heading font-medium flex flex-col md:text-7xl md:text-left">
          <AnimatedText text="CodeCraft" colors={['#a7f3d0', '#6ee7b7', '#34d399', '#10b981']} />
          <AnimatedText text="Summit 2025" colors={['#d7e4f2', '#82a7ce', '#6c81f7', '#ffffff']} />
        </h1>
      </div>

      <div className="flex gap-5 items-stretch flex-col md:flex-row">
        <div className="flex-1 bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="flex font-heading font-semibold text-gray-200 text-xl flex-row">
              <PencilLineIcon className="" />
              <span className="ml-4">Sobre o evento</span>
            </h2>
            <span className="flex items-center gap-2 text-green font-semibold text-xs">
              <Radio className="size-5 animate-pulse" />
              <span className="animate-pulse">AO VIVO</span>
            </span>
          </div>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            Um evento feito por e para pessoas desenvolvedoras apaixonadas por
            criar soluções inovadoras e compartilhar conhecimento. Vamos
            mergulhar nas tendências mais recentes em desenvolvimento de
            software, arquitetura de sistemas e tecnologias emergentes, com
            palestras, workshops e hackathons.
            <br />
            <br />
            <div className="flex">
              <Calendar className="" size={20} />
              <span className="ml-4">Dias 15 a 17 de março | Das 18h às 21h | Online & Gratuito</span>
            </div>
          </p>
        </div>
        <SubscriptionForm />
      </div>
    </div>
  )
}
