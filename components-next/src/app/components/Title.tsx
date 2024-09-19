import { ArrowRight } from "lucide-react"
import { ReactNode } from "react"

interface TitleProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export const Title = ({ children, ...props }: TitleProps) => {

  return ( 
    <div
    {...props}
    className={
      `
      flex flex-col after:w-12 after:bg-blue-600 after:h-2 after:mt-2 after:rounded-lg after:mb-4
      ${props.className}
      `
    }>
      <h1 className="text-white font-semibold flex items-center gap-2 text-xl">
        {children}
        <ArrowRight size={20} />
      </h1>
    </div>
  )
}