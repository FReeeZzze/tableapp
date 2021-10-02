export const parseDateString = (dateString) => dateString.replace(/T\S+/gm, '')

export const checkСondition = (a, b, condition) => {
    const left = a.toString().replace(/\n/gm, '').toLowerCase()
    const right = b.toString().replace(/\n/gm, '').toLowerCase()

    switch(condition) {
        case 'равно':
            return left === right;
        case 'больше':
            return left > right;
        case 'меньше':
            return left < right;
        default:
            return left.includes(right)
    }
}