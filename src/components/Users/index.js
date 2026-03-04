import './Users.css';

const LIMITE_LINHAS = 17;

// Gera automaticamente 25 usuários com nomes e e-mails numerados
const usuarios = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    nome: `Nome${i + 1}`,
    email: `email${i + 1}@gmail.com`
}));

function Users() {
    return (
        <table className="users-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {usuarios.slice(0, LIMITE_LINHAS).map((usuario) => (
                    <tr key={usuario.id}>
                        <td>{usuario.id}</td>
                        <td>{usuario.nome}</td>
                        <td>{usuario.email}</td>
                    </tr>
                ))}
            </tbody>
            <div className="divUsers"></div>
        </table>
    );
}

export default Users;
