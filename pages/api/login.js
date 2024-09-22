// pages/api/login.js
export default function handler(req, res) {
    // Only allow POST requests
    if (req.method === 'POST') {
        const { username, password } = req.body;

        // Mock user data (replace this with your database logic)
        const users = [
            { username: 'user1', password: 'password1' },
            { username: 'user2', password: 'password2' }
        ];

        // Check for matching user credentials
        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            // Successful login
            res.status(200).json({ message: 'Login successful', user: { username: user.username } });
        } else {
            // Failed login
            res.status(401).json({ message: 'Invalid username or password' });
        }
    } else {
        // Handle any other HTTP method
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
