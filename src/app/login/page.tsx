import { Button, Checkbox, Input, Label, Typography } from '@/components/ui';

const Login = () => {
  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20'>
      <main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
        <div className='flex flex-col gap-[8px]'>
          <Typography variant='display-sm' weight='semibold'>
            Welcome back
          </Typography>

          <Typography variant='text-md' className='text-text-tertiary'>
            Welcome back! Please enter your details.
          </Typography>

          <Label htmlFor='email'>Email</Label>
          <Input id='email' placeholder='Email' />

          <Label htmlFor='password'>Password</Label>
          <Input id='password' placeholder='Password' />

          <div className='flex items-center gap-[8px]'>
            <Checkbox id='remember' />
            <Label htmlFor='remember'>Remember me for 30 days</Label>
          </div>
        </div>

        <Button size='lg'>Sign in</Button>
      </main>
    </div>
  );
};

export default Login;
