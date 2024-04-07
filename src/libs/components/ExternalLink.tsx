import clsx from "clsx"
import { HTMLProps } from "react"

export const ExternalLink = ({ className, ...props }: HTMLProps<HTMLAnchorElement>) => {
  return (
    <a target="_blank"
      rel="noopener"
      className={clsx('hover:text-green-500 hover:underline', className)}
      {...props}
    />
  )
}
