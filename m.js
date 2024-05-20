// const newOBj = JSON.pasre(JSON.stringify(oldObj))

// function deepCopy(obj) {
//     if (typeof obj !== 'object' || obj == 'null') return obj
//     let copy = {}
//     if (obj instanceof Array) {
//         copy = []
//     }
//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             copy[key] = deepCopy(obj[key])
//         }
//     }

//     return copy
// }

// function judge(a, b) {
//     if (a == b) return true
//     if (a == null || b == null) return false
//     if (Array.isArray(a) && Array.isArray(b)) {
//         if (a.length != b.length) return false
//         for (let i = 0; i < a.length; i++) {
//             if (!judge(a[i], b[i])) return false
//         }
//         return true
//     }
//     if (typeof a === 'object' && typeof b === 'object'){
//         const keysA = Object.keys(a)
//         const keysB = Object.keys(b)

//         if (keysA.length !== keysB.length) return false
//         for (let key of keysA) {
//             if (!keysB.includes(key) || judge(a[key], b[key])) return false
//         }
//         return true
//     }
//     return true
// }

// function startPolling(pollInterval) {
//   let id
//   function fetchdata() {
//     fetch('api/data').then((res) => {
//       if (res.status === 'success') {
//         console.log(处理)
//       } else if ('终止条件') {
//         clearInterval(id)
//       }
//     })
//   }
//   id = setInterval(fetchdata, pollInterval)
// }

// console.log('Hello World!')

const s = 'aA1234567890111'
function check(s) {
  const regex = /^[A-Z][\d\s]{2,14}/
  return regex.test(s)
}
console.log(check(s))
