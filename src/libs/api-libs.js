export const getAnimeResponse = async(resource, query) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
    const anime = await response.json()
    return anime
}

export const getNestedAnimeResponse = async (resource, objectProperty) => {
  const response = await getAnimeResponse(resource)

  // kalau API punya field data
  const data = Array.isArray(response?.data) ? response.data : response

  if (!Array.isArray(data)) {
    console.error("Invalid API response:", response)
    return []
  }

  return data.flatMap(item => item[objectProperty] || [])
}


export const reproduce = (data, gap) => {
    const first = ~~(Math.random() * (data.length - gap) + 1)
    const last = first + gap

    const response = {
        data: data.slice(first, last)
    }

    return response
}

