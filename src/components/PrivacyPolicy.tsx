import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <section id="privacy" className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Política de Privacidade</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Pastelaria e Restaurante Cinderela
          </p>
          <p className="max-w-2xl mx-auto text-gray-600 mt-2">
            Última atualização: 6 de março de 2025
          </p>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="text-gray-600 mb-6">
            A sociedade comercial Rodrigues & Caiados, Lda (adiante designada por "Sociedade"), com sede na Av. das Forças Armadas 22, 1600-082 Lisboa, NIF 503657077, responsável pela exploração do estabelecimento Pastelaria e Restaurante Cinderela, compromete-se a proteger os dados pessoais dos seus clientes e a respeitar a sua privacidade em conformidade com o Regulamento (UE) 2016/679 (Regulamento Geral de Proteção de Dados – RGPD).
          </p>
          
          <p className="text-gray-600 mb-6">
            Esta Política de Privacidade aplica-se ao website restaurantecinderela.pt e explica:
          </p>
          
          <ul className="list-disc pl-6 mb-6 text-gray-600">
            <li>Quais as informações pessoais que recolhemos e tratamos/processamos e por que o fazemos;</li>
            <li>Como usamos essas informações;</li>
            <li>As opções que oferecemos, incluindo o modo de acesso e atualização de informações.</li>
          </ul>
          
          <h3 className="text-xl font-bold text-primary mb-4">1. Responsável pelo Tratamento de Dados</h3>
          <p className="text-gray-600 mb-6">
            O responsável pelo tratamento dos seus dados pessoais é a Rodrigues & Caiados, Lda, com sede na Av. das Forças Armadas 22, 1600-082 Lisboa. Para qualquer questão relacionada com esta política, podes entrar em contacto através do e-mail geral.cinderela@gmail.com.
          </p>
          
          <h3 className="text-xl font-bold text-primary mb-4">2. Fundamento Jurídico da Recolha e Tratamento de Dados Pessoais</h3>
          <p className="text-gray-600 mb-6">
            Ao aceder e utilizar o nosso website, o seu conteúdo e/ou os nossos serviços, o utilizador aceita e consente livre e expressamente que os seus dados pessoais sejam recolhidos e tratados pela Sociedade nos termos previstos nesta Política de Privacidade. A recolha de dados ocorre, por exemplo, quando:
          </p>
          
          <ul className="list-disc pl-6 mb-6 text-gray-600">
            <li>Utiliza o nosso formulário de reservas online no website;</li>
            <li>Entra em contacto connosco para solicitar informações ou fazer reservas.</li>
          </ul>
          
          <h3 className="text-xl font-bold text-primary mb-4">3. Tipos e Finalidades dos Dados Recolhidos</h3>
          <p className="text-gray-600 mb-6">
            Podemos recolher os seguintes tipos de dados pessoais, com base nas interações que tens com a Pastelaria e Restaurante Cinderela:
          </p>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b text-left bg-gray-100">Tipo de Informação</th>
                  <th className="py-2 px-4 border-b text-left bg-gray-100">Descrição</th>
                  <th className="py-2 px-4 border-b text-left bg-gray-100">Finalidade</th>
                  <th className="py-2 px-4 border-b text-left bg-gray-100">Base Legal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">Informações de Identificação</td>
                  <td className="py-2 px-4 border-b">Nome completo, e-mail, telemóvel</td>
                  <td className="py-2 px-4 border-b">Gerir reservas, responder a questões</td>
                  <td className="py-2 px-4 border-b">Execução de contrato</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Dados de Reservas</td>
                  <td className="py-2 px-4 border-b">Data, hora, número de pessoas, mensagem</td>
                  <td className="py-2 px-4 border-b">Gerir reservas e oferecer um serviço personalizado</td>
                  <td className="py-2 px-4 border-b">Execução de contrato</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h3 className="text-xl font-bold text-primary mb-4">4. Finalidades do Tratamento dos Dados</h3>
          <p className="text-gray-600 mb-6">
            Recolhemos os dados pessoais para as seguintes finalidades:
          </p>
          
          <ul className="list-disc pl-6 mb-6 text-gray-600">
            <li><strong>Gestão de Reservas:</strong> Para processar e gerir as reservas feitas através do website;</li>
            <li><strong>Serviço ao Cliente:</strong> Responder a perguntas, pedidos de informação ou mensagens enviadas através do formulário.</li>
          </ul>
          
          <p className="text-gray-600 mb-6">
            Atualmente, não utilizamos os dados para marketing ou publicidade, mas, caso isso mude no futuro, será solicitado o consentimento explícito dos utilizadores.
          </p>
          
          <h3 className="text-xl font-bold text-primary mb-4">5. Partilha de Dados com Terceiros</h3>
          <p className="text-gray-600 mb-6">
            Partilhamos os seus dados apenas com prestadores de serviços que atuam em nosso nome, tais como:
          </p>
          
          <ul className="list-disc pl-6 mb-6 text-gray-600">
            <li><strong>Plataforma de reservas:</strong> O Formspree é o serviço que processa os dados do formulário e os envia para o nosso e-mail geral.cinderela@gmail.com;</li>
            <li><strong>Prestador de Alojamento:</strong> Vercel é o provedor de alojamento do website, com servidores localizados em Paris, França (União Europeia).</li>
          </ul>
          
          <p className="text-gray-600 mb-6">
            Os dados pessoais poderão ser partilhados com terceiros apenas quando necessário para cumprir obrigações legais ou judiciais.
          </p>
          
          <h3 className="text-xl font-bold text-primary mb-4">6. Existência de Decisões Automatizadas</h3>
          <p className="text-gray-600 mb-6">
            O site da Sociedade pode recolher automaticamente informação sobre a sua visita, como endereço de IP, para fins de funcionamento básico e segurança. Não utilizamos decisões automatizadas para profiling ou publicidade no momento.
          </p>
          
          <h3 className="text-xl font-bold text-primary mb-4">7. Cookies e Tecnologias Semelhantes</h3>
          <p className="text-gray-600 mb-6">
            Utilizamos cookies essenciais no nosso site para garantir o seu funcionamento básico, como o processamento do formulário de reservas. Estes cookies não requerem consentimento prévio. Caso sejam introduzidos cookies adicionais (ex.: analíticos ou de marketing), os utilizadores serão informados e poderão gerir as suas preferências através das configurações do browser.
          </p>
          
          <h3 className="text-xl font-bold text-primary mb-4">8. Medidas de Segurança</h3>
          <p className="text-gray-600 mb-6">
            A Sociedade adota medidas técnicas e organizacionais adequadas para garantir a segurança dos dados pessoais contra acessos não autorizados, perda, destruição, alteração ou divulgação indevida, incluindo encriptação SSL durante a transmissão dos dados. Contudo, alertamos que a Internet não é um meio completamente seguro e que os dados transmitidos podem estar sujeitos a vulnerabilidades.
          </p>
          
          <h3 className="text-xl font-bold text-primary mb-4">9. Período de Retenção de Dados</h3>
          <p className="text-gray-600 mb-6">
            Os dados pessoais são retidos apenas pelo tempo necessário para as finalidades descritas nesta política, ou conforme exigido por lei. O período específico depende do tipo de dados e da finalidade do tratamento:
          </p>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b text-left bg-gray-100">Finalidade</th>
                  <th className="py-2 px-4 border-b text-left bg-gray-100">Prazo de Retenção</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">Gestão de Reservas</td>
                  <td className="py-2 px-4 border-b">5 anos após a data da reserva, salvo obrigações legais (ex.: faturação)</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-gray-600 mb-6">
            Após o término do período aplicável, os dados são eliminados de forma segura.
          </p>
          
          <h3 className="text-xl font-bold text-primary mb-4">10. Direitos dos Titulares de Dados</h3>
          <p className="text-gray-600 mb-6">
            De acordo com o RGPD, tens o direito de:
          </p>
          
          <ul className="list-disc pl-6 mb-6 text-gray-600">
            <li>Aceder aos teus dados pessoais e solicitar uma cópia;</li>
            <li>Corrigir ou eliminar dados pessoais incorretos ou desatualizados;</li>
            <li>Limitar o tratamento ou opor-te ao uso dos teus dados;</li>
            <li>Revogar o consentimento a qualquer momento, sem prejuízo da licitude do tratamento baseado no consentimento anterior;</li>
            <li>Solicitar a portabilidade dos teus dados.</li>
          </ul>
          
          <p className="text-gray-600 mb-6">
            Para exercer qualquer um destes direitos, entra em contacto através do e-mail geral.cinderela@gmail.com.
          </p>
          
          <h3 className="text-xl font-bold text-primary mb-4">11. Alterações à Política de Privacidade</h3>
          <p className="text-gray-600 mb-6">
            Reservamo-nos o direito de atualizar esta Política de Privacidade. As alterações serão publicadas no nosso site restaurantecinderela.pt, e o uso continuado do site após as alterações constitui a aceitação da nova política.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;