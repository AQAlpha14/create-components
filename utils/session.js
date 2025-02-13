export const Get = async () => {
 try {
    const session = await getSession();
    if (!session) return null;
 } catch (error) {
    console.log(error);
 }   
}