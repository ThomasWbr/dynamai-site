import './style.css'

const string1 = "O Diária Express é um sistema proposto para centralizar e organizar o gerenciamento de trabalhadores eventuais (“folguistas”) em uma empresa de serviços, substituindo o controle manual feito por planilhas e mensagens. A ideia é criar um aplicativo mobile para que supervisores registrem e acompanhem as diárias — informando dados como data, cliente, trabalhador, motivo e valor — além de permitir contato direto com os folguistas e visualizar históricos de lançamentos. Complementarmente, uma aplicação web permitiria ao administrador consolidar os registros, exportar dados para pagamento em lote e evitar erros comuns como pagamentos duplicados ou informações inconsistentes, tornando o processo de gestão e pagamento das diárias mais eficiente e confiável."
const string2 = "O Actae é um aplicativo projetado para registrar acontecimentos de forma cronológica, precisa e organizada, transformando anotações feitas no momento dos fatos em relatórios formais. A ferramenta permite que o usuário registre eventos diretamente pelo celular — adicionando descrições, datas, horários, fotos e outras evidências — criando automaticamente uma linha do tempo estruturada. Ao final, o sistema pode gerar um documento profissional em formato de relatório ou ata, útil para fins técnicos, administrativos ou jurídicos, garantindo fidelidade dos acontecimentos e evitando a perda de informações que normalmente ocorreria ao tentar reconstruir os fatos posteriormente."
const string3 = "O Tablinum é um aplicativo completo para a administração de condomínios, desenvolvido para tornar a gestão mais simples, eficiente e transparente. Com uma interface intuitiva, a plataforma centraliza o controle financeiro, a comunicação entre síndicos e moradores, a gestão de documentos e o acompanhamento de ocorrências em um só lugar. O Tablinum permite automatizar tarefas, reduzir a burocracia e melhorar a organização do condomínio, proporcionando mais praticidade no dia a dia e uma experiência mais moderna para todos os usuários."

const cards = [
    { id: 1, titulo: "Diária Express", descricao: string1},
    { id: 2, titulo: "Actae", descricao: string2},
    { id: 3, titulo: "Tablinum", descricao: string3}
]

function CreateCard({ titulo, descricao}) {
    return (
        <div className="dyCard">
            <h3 className="dyCardT">{titulo}</h3>
            <p className="dyCardP">{descricao}</p>
        </div>
    )
}

function Card() {
    return (
        <div className="cardContainer">
            {cards.map(
                (c) => (<CreateCard key={c.id} titulo={c.titulo} descricao={c.descricao} />)
            )}
        </div>
    )
}

export default Card