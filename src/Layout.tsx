import NavBar from '@components/NavBar'
import { useEffect } from 'react'
import * as nearConnect from '@near/connect'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import { UserSlice } from '@store/reducers/UserSlice'

const Layout = () => {
  const user = useAppSelector(state => state.UserSlice)
  const { UpdateState } = UserSlice.actions

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!user?.loggedIn) {
      const accountId = nearConnect.wallet.getAccountId()
      if (accountId.length > 0) {
        nearConnect.getWalletBalance().then(balance => {
          dispatch(
            UpdateState({
              id: nearConnect.wallet.getAccountId(),
              balance,
              loggedIn: true
            })
          )
        })
      }
    }
  }, [])

  return (
    <div className='h-screen min-h-full bg-skin-ternary'>
      <NavBar />
    </div>
  )
}

export default Layout
