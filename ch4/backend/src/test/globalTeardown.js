export default async function globaltTeardown() {
  await global.__MONGOINSTANCE.stop()
}
