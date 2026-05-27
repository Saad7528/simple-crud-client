export const getUsers = async () =>{
    const res = await fetch('http://localhost:5000/users');
    const data = await res.json()
    return data;
}

export const getUserById = async (userId) => {
    const res = await fetch(`http://localhost:5000/users/${userId}`);
    const data = await res.json();
    return data;
}   

// export const getUserById = async (userId) => {
//     console.log("User Id", userId);
//     try {
//         // cache: 'no-store' যুক্ত করা হলো, যাতে Next.js পুরনো ক্যাশ করা HTML এরর না দেখায়
//         const res = await fetch(`http://localhost:5000/users/${userId}`, {
//             cache: 'no-store' 
//         });

//         // রেসপন্স ঠিক না থাকলে (যেমন 500 বা 404 হলে) জোর করে JSON পার্স করবে না
//         if (!res.ok) {
//             console.error(`Backend returned an error! Status: ${res.status}`);
//             return null; // অথবা আপনার প্রয়োজন অনুযায়ী error handle করুন
//         }

//         const data = await res.json();
//         return data;

//     } catch (error) {
//         console.error("Failed to fetch user:", error);
//         return null;
//     }
// }