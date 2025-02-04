
export async function load({fetch}) {
    const res= await fetch('./periodic.json');
    const data=await res.json();
    return {
        props:{
            data
        }
    };
    
}
export default load;