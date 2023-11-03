export default function SignIn() {
    return (
        <main>
            <h3>Sign In</h3>
            <form>
                <p>Email</p>
                <input type="email" />
                <p>Password</p>
                <input type="password" />
                <br />
                <input type="submit" value="Sign in" />
            </form>
        </main>
    );
}