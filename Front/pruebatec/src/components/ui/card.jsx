import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)}
    {...props} />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col p-6", className)} // Eliminamos el espacio entre elementos
    {...props} />
))
CardHeader.displayName = "CardHeader"

// Nuevo componente para agregar una imagen a la card
const CardImage = React.forwardRef(({ className, ...props }, ref) => (
  <img
    ref={ref}
    className={cn("w-full h-auto", className)} // Establecemos el ancho máximo y ajustamos la altura automáticamente
    {...props} />
))
CardImage.displayName = "CardImage"

export { Card, CardHeader, CardImage }
