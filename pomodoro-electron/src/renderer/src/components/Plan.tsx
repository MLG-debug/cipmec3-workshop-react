import { Check, Diamond } from "lucide-react"

interface PlanProps {
  title: string
  text: string
  price: number
  type: "silver" | "gold" | "diamond"
  features: string[]
  best: boolean
}

export const Plan = ({ price, text, title, type, features, best }: PlanProps) => {

  let color = ""

  switch (type) {
    case "silver":
      color = "text-zinc-300"
      break;

    case "gold":
      color = "text-yellow-300"
      break;

    case "diamond":
      color = "text-cyan-300"
      break;

    default:
      break;
  }

  return (
    <div className={`w-80 self-stretch p-8 bg-neutral-800 rounded-tl-[42px] rounded-tr-2xl rounded-bl-2xl rounded-br-3xl border flex-col justify-start items-center gap-8 inline-flex ${best ? "border-violet-600" : "border-zinc-500"}`}>
      {
        best &&
        <div className='-translate-y-[47px] absolute'>
          <span className='bg-violet-600 rounded-md text-white font-bold px-2 py-1 '>Recomendado</span>
        </div>
      }
      <div className="self-stretch h-36 flex-col justify-start items-center gap-8 flex">
        <div className="self-stretch justify-start items-center gap-4 inline-flex">
          <Diamond  size={32} className={`${color} fill-current`} />
          <div className={`text-center text-2xl font-bold ${color}`}>{title}</div>
        </div>
        <div className="self-stretch flex-col justify-center items-start gap-4 flex">
          <div className="justify-center items-center gap-1 inline-flex">
            <div className="text-white text-sm font-normal">R$</div>
            <div className="text-white text-3xl font-bold">{price}</div>
            <div className="text-zinc-500 text-sm font-normal">/mês</div>
          </div>
          <div className="text-white text-base font-normal">{text}</div>
        </div>
      </div>
      <div className="self-stretch  flex-col justify-start items-start gap-8 flex">
        <button className="transition-colors hover:bg-violet-700 self-stretch p-4 bg-violet-600 rounded-lg justify-center items-center gap-2.5 inline-flex">
          <span className="text-white text-base font-bold">Assinar agora</span>
        </button>
        <div className="self-stretch pt-4 border-t border-zinc-800 flex-col justify-start items-start gap-3.5 flex">
          {
            features.map((feature, index) => {
              return <Feature key={index} text={feature} />
            })
          }
        </div>
      </div>
    </div>
  )
}

interface FeatureProps {
  text: string
}

const Feature = ({ text }: FeatureProps) => {
  return (
    <div className="justify-start items-start gap-2 inline-flex">
      <Check  size={16} className='text-purple-600' />
      <div className="text-white text-sm font-normal">{text}</div>
    </div>
  )
}
