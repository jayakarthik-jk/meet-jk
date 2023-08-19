import { BiSolidMoon, BiSolidSun } from 'react-icons/bi'
import { Button } from '../ui/button'
import { Form, FormControl, FormField } from '../ui/form'
import { Input } from '../ui/input'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { useTheme } from 'next-themes'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import type { FC } from 'react'

const formSchema = z.object({
  search: z.string()
})

const TopNavbar: FC = () => {
  const { setTheme, theme } = useTheme()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: ''
    }
  })
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data.search)
  }
  return (
    <nav className="CONTAINER fixed left-0 right-0 top-0 z-10 h-12 border-b border-b-popover bg-secondary">
      <motion.div
        className="flex h-full items-center justify-between px-4"
        initial={{ y: -100 }}
        animate={{ y: 0, transition: { delay: 0.1 } }}
      >
        <div className="LEFT-CONTAINER text-xl font-extrabold text-primary">
          Meet me
        </div>
        <Form {...form}>
          <form className="SEARCHBAR" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              name="search"
              control={form.control}
              render={({ field }) => (
                <FormControl>
                  <Input {...field} placeholder="Search my sessions here" />
                </FormControl>
              )}
            />
          </form>
        </Form>
        <div className="RIGHT-CONTAINER flex gap-4">
          <Button
            variant="outline"
            className="bg-seconday text-secondary-foreground"
            onClick={() => {
              setTheme(theme === 'dark' ? 'light' : 'dark')
            }}
          >
            {theme === 'dark' ? <BiSolidSun /> : <BiSolidMoon />}
          </Button>
          <Button variant="outline" className="text-secondary-foreground">
            Login
          </Button>
          <Button>Signup</Button>
        </div>
      </motion.div>
    </nav>
  )
}

export default TopNavbar
