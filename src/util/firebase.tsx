// Firebase is imported on demand so it stays out of the main bundle.
const loadApp = () => import('../config/FirebaseConfig').then((module) => module.app)

const loadAnalytics = async () => {
  const [app, {getAnalytics, logEvent}] = await Promise.all([loadApp(), import('firebase/analytics')])
  return {analytics: getAnalytics(app), logEvent}
}

export const initAnalytics = () => {
  loadAnalytics().catch((error) => console.warn('Analytics failed to load: ', error))
}

export const logAnalyticsEvent = (name: string, params?: Record<string, unknown>) => {
  loadAnalytics()
    .then(({analytics, logEvent}) => logEvent(analytics, name, params))
    .catch((error) => console.warn('Analytics event failed: ', error))
}

export const saveContactMessage = async (data: {name: string, email: string, details: string}) => {
  const [app, {getFirestore, collection, addDoc}] = await Promise.all([loadApp(), import('firebase/firestore')])
  return addDoc(collection(getFirestore(app), 'contacts'), data)
}
