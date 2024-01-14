export const getAllPrimates = () => {
    return fetch(`http://localhost:8088/primates`).then(res => res.json())
}