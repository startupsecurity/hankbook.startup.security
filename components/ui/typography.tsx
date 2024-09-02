import { cn } from "@/lib/utils"
import { VariantProps, cva } from "class-variance-authority"
import { forwardRef } from "react"

const typographyVariants = cva("", {
    variants: {
        variant: {
            h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
            h2: "scroll-m-20 text-3xl font-semibold tracking-tight",
            body: "leading-7",
        },
    },
    defaultVariants: {
        variant: "body",
    },
})

export interface TypographyProps
    extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof typographyVariants> {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div" | "li"
}

export const Typography = forwardRef(
    <T extends React.ElementType = 'div'>(
        { className, variant, as, ...props }: TypographyProps & { as?: T },
        ref: React.Ref<React.ElementRef<T>>
    ) => {
        const Comp = (as || 'div') as React.ElementType
        return (
            <Comp
                className={cn(typographyVariants({ variant, className }))}
                ref={ref}
                {...props}
            />
        )
    }
) as React.ForwardRefExoticComponent<TypographyProps & React.RefAttributes<HTMLElement>> & {
    displayName?: string
}

Typography.displayName = "Typography"
