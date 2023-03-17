const storeLocalData = async (key: string, value: any) => {
  try {
    await localStorage.setItem(key, JSON.stringify(value))
    const tempData: any = await retrieveLocalData(key)
  } catch (error) {
    console.log(
      `Erro ao armazenar dados (key: ${key}) no LocalStorage: ${error}`,
    )
  }
}

const retrieveLocalData = async (key: string) => {
  let data = null
  try {
    data = await localStorage.getItem(key)
  } catch (error) {
    console.log(
      `Erro ao recuperar dados (key: ${key}) do LocalStorage: ${error}`,
    )
  }
  return data
}

const clearStorage = async () => {
  try {
    await localStorage.clear()
    console.log('ADEUS')
  } catch (error) {
    console.log(`Erro ao remover todos os dados`)
  }
}
export { storeLocalData, retrieveLocalData, clearStorage }
