export const time = () => {
    const rawUserTime = ref(new Date())
    const UserTime = computed(() => {
        const h = rawUserTime.value.getHours()
        return `${h}`
    })

    return {
        UserTime
    }
}