import React from 'react'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'

import MyLayout from '../components/layout/MyLayout'

import IndexPage from '../pages/admin/IndexPage'
import NotFoundPage from '../pages/NotFoundPage'

import SettingsPage from '../pages/admin/SettingsPage'
import ProfilePage from '../pages/admin/settings/ProfilePage'

export default function ProtectedApp() {
  return (
    <MyLayout>
      <Switch>
        <Route exact path="/admin" component={IndexPage} />

        <Route exact path="/admin/settings" component={SettingsPage} />
        <Route exact path="/admin/settings/profile" component={ProfilePage} />

        <Route path="*" component={NotFoundPage} />
      </Switch>
    </MyLayout>
  )
}
