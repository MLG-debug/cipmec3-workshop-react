interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export function Button(props: ButtonProps){
  return (
    <button
      {...props}
      className={
        ` text-white font-bold py-3 px-6 rounded-lg text-md transition-transform hover:scale-105 ${props.className}`
      }>
     {props.children}
    </button>
  )
}
