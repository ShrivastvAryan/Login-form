export const LoginForm=()=>{
    return(
        <>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-700 w-3/5 h-3/5 rounded-sm">
        <p className="text-white p-2 text-4xl text-center">Login Form</p>
        <form>
           <div>
                    <label htmlFor="username" className=" text-white text-2xl p-2">Username or Email</label>
                    <input type="text" name="username"
                     placeholder="username"
                     required
                     autoComplete="off"
                    className=" m-2 bg-blue-100 p-1 rounded-md w-3/5"/>
           </div>

           <div>
                    <label htmlFor="password" className=" text-white text-2xl p-2">Password</label>
                    <input type="password" name="password"
                     placeholder="password"
                     required
                     autoComplete="off"
                    className=" m-2 bg-blue-100 p-1 rounded-md"/>
            </div>

            <button type="submit" className="bg-blue-300 p-1 text-xl m-6 rounded-md cursor-pointer">Login</button>

        </form>
        </div>
        </>
    )
}