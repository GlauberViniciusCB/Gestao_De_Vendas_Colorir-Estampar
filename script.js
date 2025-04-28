//manipulação do layout

function mudarPagina(pagina) {
    // Seleciona todos os itens de navegação
    const menuItens = document.querySelectorAll('.navegacao li');

    // Remove a classe 'ativo' de todos os itens
    menuItens.forEach(item => item.classList.remove('ativo'));

    // Adiciona a classe 'ativo' ao item selecionado pelo ID
    const itemSelecionado = document.getElementById(pagina);
    itemSelecionado.classList.add('ativo');

    switch (pagina) {
        case 'Dashboard':
            showDashboard();
            break;
        case 'Produtos':
            showProdutos();
            break;
        case 'Estoque':
            showEstoque();
            break;
        case 'Clientes':
            showClientes();
            break;
        case 'Vendas':
            showVendas();
            break;
        case 'Usuario':
            showUsuarios();
            break;
        default:
            break;
    }
}

function showDashboard(){
    document.querySelector('.sectionMain').innerHTML = `
     <div class="pesquisa caixaInput">
                    <input type="search" placeholder="Pesquise aqui...">
                    <i class="fa-solid fa-magnifying-glass" style="color: #f4f4f2;"></i>
                </div>
                <div class="inicioRapido">
                    <div class="cardInicioRapido">
                        <i class="fa-solid fa-box" style="color: #f4f4f2;"></i>
                        <h3>Produtos</h3>
                        <p>Total: <span>0</span></p>
                    </div>
                    <div class="cardInicioRapido">
                        <i class="fa-solid fa-cart-shopping" style="color: #f4f4f2;"></i>
                        <h3>Vendas</h3>
                        <p>Total: <span>0</span></p>
                    </div>
                    <div class="cardInicioRapido">
                        <i class="fa-solid fa-boxes-stacked" style="color: #f4f4f2;"></i>
                        <h3>Estoque</h3>
                        <p>Total: <span>0</span></p>
                    </div>
                </div>
                <div class="tituloHistoricoDeEstoque">
                    <h2>Histórico Do Estoque</h2>
                </div>
                <div class="areaHistoricoDeEstoque">
                    <table class="tabelaHistoricoDeEstoque">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Quantidade</th>
                                <th>Estado</th>
                                <th>Motivo</th>
                                <th>Data</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Caneca</td>
                                <td>3</td>
                                <td>Entrada</td>
                                <td>Venda</td>
                                <td>31/03/2025</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Garrafa 500mL</td>
                                <td>1</td>
                                <td>Saída</td>
                                <td>Venda</td>
                                <td>31/03/2025</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Garrafa 500mL</td>
                                <td>1</td>
                                <td>Saída</td>
                                <td>Venda</td>
                                <td>31/03/2025</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Garrafa 500mL</td>
                                <td>1</td>
                                <td>Saída</td>
                                <td>Venda</td>
                                <td>31/03/2025</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Garrafa 500mL</td>
                                <td>1</td>
                                <td>Saída</td>
                                <td>Venda</td>
                                <td>31/03/2025</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Garrafa 500mL</td>
                                <td>1</td>
                                <td>Saída</td>
                                <td>Venda</td>
                                <td>31/03/2025</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Garrafa 500mL</td>
                                <td>1</td>
                                <td>Saída</td>
                                <td>Venda</td>
                                <td>31/03/2025</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Garrafa 500mL</td>
                                <td>1</td>
                                <td>Saída</td>
                                <td>Venda</td>
                                <td>31/03/2025</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Garrafa 500mL</td>
                                <td>1</td>
                                <td>Saída</td>
                                <td>Venda</td>
                                <td>31/03/2025</td>
                            </tr> 
                            <tr>
                                <td>3</td>
                                <td>Garrafa 500mL</td>
                                <td>1</td>
                                <td>Saída</td>
                                <td>Venda</td>
                                <td>31/03/2025</td>
                            </tr> 
                            <tr>
                                <td>3</td>
                                <td>Garrafa 500mL</td>
                                <td>1</td>
                                <td>Saída</td>
                                <td>Venda</td>
                                <td>31/03/2025</td>
                            </tr> 
                            <tr>
                                <td>4</td>
                                <td>Garrafa 500mL</td>
                                <td>1</td>
                                <td>Saída</td>
                                <td>Venda</td>
                                <td>31/03/2025</td>
                            </tr> 
                            <tr>
                                <td>4</td>
                                <td>Garrafa 500mL</td>
                                <td>1</td>
                                <td>Saída</td>
                                <td>Venda</td>
                                <td>31/03/2025</td>
                            </tr> 
                            <tr>
                                <td>4</td>
                                <td>Garrafa 500mL</td>
                                <td>1</td>
                                <td>Saída</td>
                                <td>Venda</td>
                                <td>31/03/2025</td>
                            </tr> 
                            <tr>
                                <td>4</td>
                                <td>Garrafa 500mL</td>
                                <td>1</td>
                                <td>Saída</td>
                                <td>Venda</td>
                                <td>31/03/2025</td>
                            </tr> 
                            <tr>
                                <td>4</td>
                                <td>Garrafa 500mL</td>
                                <td>1</td>
                                <td>Saída</td>
                                <td>Venda</td>
                                <td>31/03/2025</td>
                            </tr> 
                            <tr>
                                <td>5</td>
                                <td>Garrafa 500mL</td>
                                <td>1</td>
                                <td>Saída</td>
                                <td>Venda</td>
                                <td>31/03/2025</td>
                            </tr> 
                        </tbody>
                    </table>
                </div>
        </section>
    `
}

// funçoes relacionadas com section Especial de Produto

function showProdutos(){
    document.querySelector('.sectionMain').innerHTML= `
    
            <div class="pesquisa caixaInput">
                <input type="search" placeholder="Pesquise aqui...">
                <i class="fa-solid fa-magnifying-glass" style="color: #f4f4f2;"></i>
            </div>
            <div class="inicioInterativo">
                <div class="tituloInterativo">
                    <h2>Produto</h2>
                </div>
                <div class="menuInterativo">
                    <div class="cardInicioRapido" id="AdicionarProduto" onclick="addProduto()">
                        <i class="fa-solid fa-plus" style="color: #f4f4f2;"></i>
                        <h3>Adicionar</h3>
                        <!-- <p>Total: <span>0</span></p> -->
                    </div>
                    <div class="cardInicioRapido" id="AtulizarProduto" onclick="atualizarProduto()">
                        <i class="fa-solid fa-pen-to-square" style="color: #f4f4f2;"></i>
                        <h3>Atualizar</h3>
                        <!-- <p>Total: <span>0</span></p> -->
                    </div>
                    <div class="cardInicioRapido " id="DeletarProduto" onclick="deletarProduto()">
                        <i class="fa-solid fa-trash" style="color: #f4f4f2;"></i>
                        <h3>Remover</h3>
                        <!-- <p>Total: <span>0</span></p> -->
                    </div>
                    <div class="cardInicioRapido azul">
                        <i class="fa-solid fa-print" style="color: #f4f4f2;"></i>
                        <h3>Imprimir</h3>
                        <!-- <p>Total: <span>0</span></p> -->
                    </div>
                </div>
            </div>
            <div class="tituloHistoricoDeEstoque">
                <h2>Histórico</h2>
            </div>
            <div class="areaHistoricoDeEstoque">
                <table class="tabelaHistoricoDeProdutos">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Descrição</th>
                            <th>Preço</th>
                            <th>Categoria</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Caneca</td>
                            <td>Caneca Personalizada</td>
                            <td>R$35</td>
                            <td>Venda</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Caneca</td>
                            <td>Caneca Personalizada</td>
                            <td>R$35</td>
                            <td>Venda</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Caneca</td>
                            <td>Caneca Personalizada</td>
                            <td>R$35</td>
                            <td>Venda</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Caneca</td>
                            <td>Caneca Personalizada</td>
                            <td>R$35</td>
                            <td>Venda</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Caneca</td>
                            <td>Caneca Personalizada</td>
                            <td>R$35</td>
                            <td>Venda</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Caneca</td>
                            <td>Caneca Personalizada</td>
                            <td>R$35</td>
                            <td>Venda</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Caneca</td>
                            <td>Caneca Personalizada</td>
                            <td>R$35</td>
                            <td>Venda</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Caneca</td>
                            <td>Caneca Personalizada</td>
                            <td>R$35</td>
                            <td>Venda</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Caneca</td>
                            <td>Caneca Personalizada</td>
                            <td>R$35</td>
                            <td>Venda</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Garrafa Squeeze</td>
                            <td>Squeeze Personalizada</td>
                            <td>R$35</td>
                            <td>Garrafa</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
        <div class="sectionEspecial">
            <div class="sectionEspecialConteudo">
            
            </div>
            <script src="script.js"></script>
    `
}





function mostrarAdicionaCatergoria() {
    document.getElementById('addCategoria').classList.remove('desativado');
}

function fecharMenu() {
    document.querySelector('.sectionEspecial').style.display = 'none';
}

function addProduto() {
    const section = document.querySelector('.sectionEspecial');
    section.style.display = 'flex';
    const conteudo = document.querySelector('.sectionEspecialConteudo');
    conteudo.innerHTML = `
        <div class="btnFechar" onclick="fecharMenu()">
                    <i class="fa-solid fa-xmark" style="color: #f4f4f2;"></i>
                </div>
                <h2>Adicionar Produto</h2>
                <form action="">
                    <div class="inputSectionEspecial">
                        <input type="text" placeholder="Nome" required>
                        <i class="fa-solid fa-box-open" style="color: #f4f4f2;"></i>
                    </div>
                    <div class="inputSectionEspecial">
                        <input type="text" placeholder="Preço" required>
                        <i class="fa-solid fa-coins" style="color: #f4f4f2;"></i>
                    </div>
                    <div class="inputSectionEspecial">
                        <input type="text" placeholder="Descrição" required>
                        <i class="fa-solid fa-pen-to-square" style="color: #f4f4f2;"></i>
                    </div>
                    <div class="inputSectionEspecial">
                        <i class="fa-solid fa-layer-group" style="color: #f4f4f2;"></i>
                        <select name="" id="" required>
                            <option value=""disabled selected>Selecione Uma Categoria</option>
                            <option value="">Xícara</option>
                            <option value="">Garrafa Squeeze</option>
                        </select>
                    </div>
                    <div class="btnSubmit">
                        <button type="button" id="criarNovaCategoria" onclick="mostrarAdicionaCatergoria()">Criar Nova Categoria</button>
                        <div id="addCategoria" class="addCategoria desativado">
                            <!-- <i class="fa-solid fa-layer-group" style="color: #f4f4f2;"></i> -->
                            <input type="text" placeholder="Nome da Nova Categoria">
                            <button type="button">Adicionar Categoria</button>
                        </div>
                        <input type="submit" value="Salvar">
                    </div>
                </form>
    `;
}


function atualizarProduto() {
    const section = document.querySelector('.sectionEspecial');
    section.style.display = 'flex';
    const conteudo = document.querySelector('.sectionEspecialConteudo');
    conteudo.innerHTML = ` 
                <div class="btnFechar" onclick="fecharMenu()">
                    <i class="fa-solid fa-xmark" style="color: #f4f4f2;"></i>
                </div>
                <h2>Atualizar Produto</h2>
                <form action="">
                    <div class="inputSectionEspecial">
                        <input type="text" placeholder="Alterar Nome" required>
                        <i class="fa-solid fa-box-open" style="color: #f4f4f2;"></i>
                    </div>
                    <div class="inputSectionEspecial">
                        <input type="text" placeholder="Alterar Preço" required>
                        <i class="fa-solid fa-coins" style="color: #f4f4f2;"></i>
                    </div>
                    <div class="inputSectionEspecial">
                        <input type="text" placeholder="Alterar Descrição" required>
                        <i class="fa-solid fa-pen-to-square" style="color: #f4f4f2;"></i>
                    </div>
                    <div class="inputSectionEspecial">
                        <i class="fa-solid fa-layer-group" style="color: #f4f4f2;"></i>
                        <select name="" id="" required>
                            <option value=""disabled selected>Alterar Categoria</option>
                            <option value="">Xícara</option>
                            <option value="">Garrafa Squeeze</option>
                        </select>
                    </div>
                    <div class="btnSubmit">
                        <button type="button" id="criarNovaCategoria" onclick="mostrarAdicionaCatergoria()">Criar Nova Categoria</button>
                        <div id="addCategoria" class="addCategoria desativado">
                            <input type="text" placeholder="Nome da Nova Categoria">
                            <button type="button">Adicionar Categoria</button>
                        </div>
                        <input type="submit" value="Salvar">
                    </div>
                </form> 
    `
}

function deletarProduto(){
    const section = document.querySelector('.sectionEspecial');
    section.style.display = 'flex';
    const conteudo = document.querySelector('.sectionEspecialConteudo');
    conteudo.innerHTML= `
        <div class="btnFechar" onclick="fecharMenu()">
                    <i class="fa-solid fa-xmark" style="color: #f4f4f2;"></i>
                </div>
                <h2>Remover Produto</h2>
           
                <div class="escolhaSelecionada">
                    
                        <div class="dadoSelecionado">
                            <span>ID:</span>
                            <label for="">3</label>
                        </div>
                    
                        <div class="dadoSelecionado">
                            <span>Nome:</span>
                            <label for="">Garrafa Squeeze</label>
                        </div>
                    
                        <div class="dadoSelecionado">
                            <span>Descrição:</span>
                            <label for="">Squeeze Personalizada</label>
                        </div>
                    
                        <div class="dadoSelecionado">
                            <span>Preço:</span>
                            <label for="">R$35</label>
                        </div>
                        <div class="dadoSelecionado">
                            <span>Categoria:</span>
                            <label for="">Garrafa</label>
                        </div>
                </div>

                <div class="Decisao">
                    <button type="button" value="sim">Sim</button>
                    <button type="button" value="nao">Não</button>
                </div>
    `
}


// funçoes relacionadas com section Especial de Estoque


function showEstoque(){
    document.querySelector('.sectionMain').innerHTML =`
             <div class="pesquisa caixaInput">
                <input type="search" placeholder="Pesquise aqui...">
                <i class="fa-solid fa-magnifying-glass" style="color: #f4f4f2;"></i>
            </div>
            <div class="inicioInterativo">
                <div class="tituloInterativo">
                    <h2>Estoque</h2>
                </div>
                <div class="menuInterativo">
                    <div class="cardInicioRapido" id="AdicionarEstoque" onclick="addEstoque()">
                        <i class="fa-solid fa-plus" style="color: #f4f4f2;"></i>
                        <h3>Adicionar</h3>
                        <!-- <p>Total: <span>0</span></p> -->
                    </div>
                    <div class="cardInicioRapido" id="AtualizarEstoque" onclick = "atualizarEstoque()">
                        <i class="fa-solid fa-pen-to-square" style="color: #f4f4f2;"></i>
                        <h3>Atualizar</h3>
                        <!-- <p>Total: <span>0</span></p> -->
                    </div>
                    <div class="cardInicioRapido vermelho" id= "DeletarEstoque" onclick="deletarEstoque()">
                        <i class="fa-solid fa-trash" style="color: #f4f4f2;"></i>
                        <h3>Remover</h3>
                        <!-- <p>Total: <span>0</span></p> -->
                    </div>
                    <div class="cardInicioRapido azul">
                        <i class="fa-solid fa-print" style="color: #f4f4f2;"></i>
                        <h3>Imprimir</h3>
                        <!-- <p>Total: <span>0</span></p> -->
                    </div>
                </div>
            </div>
            <div class="tituloHistoricoDeEstoque">
                <h2>Histórico</h2>
            </div>
            <div class="areaHistoricoDeEstoque">
                <table class="tabelaHistoricoDeProdutos">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Produto</th>
                            <th>Estado</th>
                            <th>Quantidade</th>
                            <th>Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Caneca</td>
                            <td>Disponível</td>
                            <td>3</td>
                            <td>31/03/2025</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Caneca</td>
                            <td>Disponível</td>
                            <td>3</td>
                            <td>31/03/2025</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Caneca</td>
                            <td>Indisponível</td>
                            <td>105</td>
                            <td>31/03/2025</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Caneca</td>
                            <td>Disponível</td>
                            <td>100</td>
                            <td>31/03/2025</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Caneca</td>
                            <td>Indisponível</td>
                            <td>20</td>
                            <td>31/03/2025</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Caneca</td>
                            <td>Disponível</td>
                            <td>31</td>
                            <td>31/03/2025</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Caneca</td>
                            <td>Indisponível</td>
                            <td>50</td>
                            <td>31/03/2025</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Caneca</td>
                            <td>Disponível</td>
                            <td>5</td>
                            <td>31/03/2025</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Caneca</td>
                            <td>Disponível</td>
                            <td>10</td>
                            <td>31/03/2025</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Garrafa Squeeze</td>
                            <td>Disponível</td>
                            <td>35</td>
                            <td>31/03/2025</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
        <div class="sectionEspecial">
            <div class="sectionEspecialConteudo">`
}


function addEstoque(){
   const section = document.querySelector('.sectionEspecial');
   section.style.display = 'flex';
   const conteudo = document.querySelector('.sectionEspecialConteudo');
   conteudo.innerHTML = `
   <div class="btnFechar" onclick="fecharMenu()">
                    <i class="fa-solid fa-xmark" style="color: #f4f4f2;"></i>
                </div>
                <h2>Criar Novo Estoque</h2>
                <form action="">
                    <div class="inputSectionEspecial">
                        <input type="text"  placeholder="Nome"  required>
                        <i class="fa-solid fa-box-open" style="color: #f4f4f2;"></i>
                    </div>
                    <div class="inputSectionEspecial">
                        <input type="text" placeholder="Quantidade" required>
                        <i class="fa-solid fa-boxes-stacked" style="color: #f4f4f2;"></i>
                    </div>
                    <div class="inputSectionEspecial">
                        <input type="text" placeholder="Observação">
                        <i class="fa-solid fa-pen-to-square" style="color: #f4f4f2;"></i>
                    </div>
                    <div class="inputSectionEspecial">
                        <!-- <i class="fa-solid fa-layer-group" style="color: #f4f4f2;"></i> -->
                        <div class="estoqueDisp">
                            <h4>Disponíbilidade de Venda</h4>
                            <div class="conteudoEscEstoque">
                                <div class="estoqueDispEsc">
                                    <input type="radio" name="dispDeEstoque" value="Disponivel">
                                    <label for="">Disponível</label>
                                </div>
                                <div class="estoqueDispEsc">
                                    <input type="radio" name="dispDeEstoque"  value="Disponivel">
                                    <label for="">Indisponível</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="btnSubmit">
                        <input type="submit" value="Salvar">
                    </div>
                </form>
    </div>
   `;
}

function atualizarEstoque(){
    const section = document.querySelector('.sectionEspecial');
    section.style.display = 'flex';
    const conteudo = document.querySelector('.sectionEspecialConteudo');
    conteudo.innerHTML = `
    <div class="btnFechar" onclick="fecharMenu()">
                    <i class="fa-solid fa-xmark" style="color: #f4f4f2;"></i>
                </div>
                <h2>Atualizar Estoque</h2>
                <form action="">
                    <div class="inputSectionEspecial">
                        <input type="text"  placeholder="Nome"  required>
                        <i class="fa-solid fa-box-open" style="color: #f4f4f2;"></i>
                    </div>
                    <div class="inputSectionEspecial">
                        <input type="text" placeholder="Obeservação" required>
                        <i class="fa-solid fa-pen-to-square" style="color: #f4f4f2;"></i>
                    </div>
                    <div class="inputSectionEspecial">
                        <input type="text" placeholder="Quantidade" required>
                        <i class="fa-solid fa-boxes-stacked" style="color: #f4f4f2;"></i>
                    </div>
                    <div class="inputSectionEspecial">
                        <!-- <i class="fa-solid fa-layer-group" style="color: #f4f4f2;"></i> -->
                        <div class="estoqueDisp">
                            <h4>Disponíbilidade de Venda</h4>
                            <div class="conteudoEscEstoque">
                                <div class="estoqueDispEsc">
                                    <input type="radio"  name="dispDeEstoque" value="Disponivel">
                                    <label for="">Disponível</label>
                                </div>
                                <div class="estoqueDispEsc">
                                    <input type="radio" name="dispDeEstoque"  value="Disponivel">
                                    <label for="">Indisponível</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="btnSubmit">
                        <input type="submit" value="Salvar">
                    </div>
                </form>

    ` 
}

function deletarEstoque(){
        const section = document.querySelector('.sectionEspecial');
        section.style.display = 'flex';
        const conteudo = document.querySelector('.sectionEspecialConteudo');
        conteudo.innerHTML=
        `
         <div class="btnFechar" onclick="fecharMenu()">
                    <i class="fa-solid fa-xmark" style="color: #f4f4f2;"></i>
                </div>
                <h2>Deletar Estoque</h2>
           
                <div class="escolhaSelecionada">
                    
                        <div class="dadoSelecionado">
                            <span>ID:</span>
                            <label for="">3</label>
                        </div>
                    
                        <div class="dadoSelecionado">
                            <span>Estoque:</span>
                            <label for="">Garrafa Squeeze</label>
                        </div>
                    
                        <div class="dadoSelecionado">
                            <span>Observação:</span>
                            <label for="">Squeeze Personalizada</label>
                        </div>
                    
                        <div class="dadoSelecionado">
                            <span>Quantidade:</span>
                            <label for="">10</label>
                        </div>
                </div>

                <div class="Decisao">
                    <button type="button" value="sim">Sim</button>
                    <button type="button" value="nao">Não</button>
                </div>
        `
}


// funçoes relacionadas com section Especial de Clientes ATENÇÃO PAREI AQUI

function showClientes(){
    document.querySelector('.sectionMain').innerHTML=
    `
    <div class="pesquisa caixaInput">
                <input type="search" placeholder="Pesquise aqui...">
                <i class="fa-solid fa-magnifying-glass" style="color: #f4f4f2;"></i>
            </div>
            <div class="inicioInterativo">
                <div class="tituloInterativo">
                    <h2>Cliente</h2>
                </div>
                <div class="menuInterativo">
                    <div class="cardInicioRapido" id="AdicionarCliente" onclick="addCliente()">
                        <i class="fa-solid fa-plus" style="color: #f4f4f2;"></i>
                        <h3>Adicionar</h3>
                        <!-- <p>Total: <span>0</span></p> -->
                    </div>
                    <div class="cardInicioRapido id="AtualizarCliente"  onclick="atualizarCliente()" ">
                        <i class="fa-solid fa-pen-to-square" style="color: #f4f4f2;"></i>
                        <h3>Atualizar</h3>
                        <!-- <p>Total: <span>0</span></p> -->
                    </div>
                    <div class="cardInicioRapido vermelho" id="DeletarCliente" onclick="deletarCliente()">
                        <i class="fa-solid fa-trash" style="color: #f4f4f2;"></i>
                        <h3>Remover</h3>
                        <!-- <p>Total: <span>0</span></p> -->
                    </div>
                    <div class="cardInicioRapido azul">
                        <i class="fa-solid fa-print" style="color: #f4f4f2;"></i>
                        <h3>Imprimir</h3>
                        <!-- <p>Total: <span>0</span></p> -->
                    </div>
                </div>
            </div>
            <div class="tituloHistoricoDeEstoque">
                <h2>Histórico</h2>
            </div>
            <div class="areaHistoricoDeEstoque">
                <table class="tabelaHistoricoDeProdutos">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>Morada</th>
                            <th>Cidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Valentina Aurora da Silva</td>
                            <td>Caneca Personalizada</td>
                            <td>Rua das Laranjeiras, 1234 – Bairro Jardim dos Sonhos</td>
                            <td>Congonhas</td>    
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Caneca</td>
                            <td>Caneca Personalizada</td>
                            <td>R$35</td>
                             <td>Congonhas</td>    
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Caneca</td>
                            <td>Caneca Personalizada</td>
                            <td>R$35</td>
                            <td>Congonhas</td>    
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Caneca</td>
                            <td>Caneca Personalizada</td>
                            <td>R$35</td>
                            <td>Congonhas</td>    
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Caneca</td>
                            <td>Caneca Personalizada</td>
                            <td>R$35</td>
                            <td>Congonhas</td>    
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Caneca</td>
                            <td>Caneca Personalizada</td>
                            <td>R$35</td>
                            <td>Congonhas</td>    
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Caneca</td>
                            <td>Caneca Personalizada</td>
                            <td>R$35</td>
                            <td>Congonhas</td>    
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Caneca</td>
                            <td>Caneca Personalizada</td>
                            <td>R$35</td>
                            <td>Congonhas</td>    
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Caneca</td>
                            <td>Caneca Personalizada</td>
                            <td>R$35</td>
                            <td>Congonhas</td>    
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Garrafa Squeeze</td>
                            <td>Squeeze Personalizada</td>
                            <td>R$35</td>
                            <td>Congonhas</td>    
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
        <div class="sectionEspecial">
            <div class="sectionEspecialConteudo">`
}


function addCliente(){
    const section = document.querySelector('.sectionEspecial');
    section.style.display = 'flex';
    const conteudo = document.querySelector('.sectionEspecialConteudo');
    conteudo.innerHTML = `
         <div class="btnFechar" onclick="fecharMenu()">
                    <i class="fa-solid fa-xmark" style="color: #f4f4f2;"></i>
                </div>
                <h2>Cadastrar Cliente</h2>
                <form action="">
                    <div class="inputSectionEspecial">
                        <input type="text"  placeholder="Nome"  required>
                        <i class="fa-solid fa-user" style="color: #f4f4f2;"></i>
                    </div>
                    <div class="inputSectionEspecial">
                        <input type="text" placeholder="CPF" required>
                        <i class="fa-solid fa-id-card" style="color: #f4f4f2;"></i>
                    </div>
                    <div class="inputSectionEspecial">
                        <input type="text" placeholder="Morada">
                        <i class="fa-solid fa-house" style="color: #f4f4f2;"></i>
                    </div>
                    <div class="inputSectionEspecial">
                        <input type="text" placeholder="Cidade">
                        <i class="fa-solid fa-city" style="color: #f4f4f2;"></i>
                    </div>
                    <div class="btnSubmit">
                        <input type="submit" value="Salvar">
                    </div>
                </form>
    `
}

function atualizarCliente(){
    const section = document.querySelector('.sectionEspecial');
    section.style.display = 'flex';
    const conteudo = document.querySelector('.sectionEspecialConteudo');
    conteudo.innerHTML = `
         <div class="btnFechar" onclick="fecharMenu()">
                    <i class="fa-solid fa-xmark" style="color: #f4f4f2;"></i>
                </div>
                <h2>Atualizar Cliente</h2>
                <form action="">
                    <div class="inputSectionEspecial">
                        <input type="text"  placeholder=" Atualizar Nome"  required>
                        <i class="fa-solid fa-user" style="color: #f4f4f2;"></i>
                    </div>
                    <div class="inputSectionEspecial">
                        <input type="text" placeholder="Atualizar CPF" required>
                        <i class="fa-solid fa-id-card" style="color: #f4f4f2;"></i>
                    </div>
                    <div class="inputSectionEspecial">
                        <input type="text" placeholder="Atualizar Morada">
                        <i class="fa-solid fa-house" style="color: #f4f4f2;"></i>
                    </div>
                    <div class="inputSectionEspecial">
                        <input type="text" placeholder="Atualizar Cidade">
                        <i class="fa-solid fa-city" style="color: #f4f4f2;"></i>
                    </div>
                    <div class="btnSubmit">
                        <input type="submit" value="Salvar">
                    </div>
                </form>
    `
}


function deletarCliente(){
    const section = document.querySelector('.sectionEspecial');
    section.style.display = 'flex';
    const conteudo = document.querySelector('.sectionEspecialConteudo');
    conteudo.innerHTML = `
     <div class="btnFechar" onclick="fecharMenu()">
                    <i class="fa-solid fa-xmark" style="color: #f4f4f2;"></i>
                </div>
                <h2>Deletar Cliente</h2>
           
                <div class="escolhaSelecionada">
                    
                        <div class="dadoSelecionado">
                            <span>ID:</span>
                            <label for="">3</label>
                        </div>
                    
                        <div class="dadoSelecionado">
                            <span>Nome:</span>
                            <label for="">Glauber Vinicius</label>
                        </div>
                    
                        <div class="dadoSelecionado">
                            <span>CPF:</span>
                            <label for="">004.222.331 - 90</label>
                        </div>
                </div>

                <div class="Decisao">
                    <button type="button" value="sim">Sim</button>
                    <button type="button" value="nao">Não</button>
                </div>
    
    `
}


// funçoes relacionadas com section Especial de Vendas ATENÇÃO PAREI AQUI

// function showVendas(){

// }



// funçoes relacionadas com section Especial de Usuários

function showUsuarios(){
    document.querySelector('.sectionMain').innerHTML = `
         <div class="pesquisa caixaInput">
                <input type="search" placeholder="Pesquise aqui...">
                <i class="fa-solid fa-magnifying-glass" style="color: #f4f4f2;"></i>
            </div>
            <div class="inicioInterativo">
                <div class="tituloInterativo">
                    <h2>Usuário</h2>
                </div>
                <div class="menuInterativo">
                    <div class="cardInicioRapido" id="AdicionarUsuario" onclick="addUsuario()">
                        <i class="fa-solid fa-plus" style="color: #f4f4f2;"></i>
                        <h3>Adicionar</h3>
                        <!-- <p>Total: <span>0</span></p> -->
                    </div>
                    <div class="cardInicioRapido" id="AtulizarProduto" onclick="atualizarUsuario()">
                        <i class="fa-solid fa-pen-to-square" style="color: #f4f4f2;"></i>
                        <h3>Atualizar</h3>
                        <!-- <p>Total: <span>0</span></p> -->
                    </div>
                    <div class="cardInicioRapido " id="deletarProduto" onclick="deletarUsuario()">
                        <i class="fa-solid fa-trash" style="color: #f4f4f2;"></i>
                        <h3>Remover</h3>
                        <!-- <p>Total: <span>0</span></p> -->
                    </div>

                    <div class="cardInicioRapido " id="permissaoUsuario" onclick="permissaoUsuario()">
                        <i class="fa-solid fa-user-shield" style="color: #f4f4f2;"></i>
                        <h3>Permissão</h3>
                        <!-- <p>Total: <span>0</span></p> -->
                    </div>

                    <div class="cardInicioRapido azul">
                        <i class="fa-solid fa-print" style="color: #f4f4f2;"></i>
                        <h3>Imprimir</h3>
                        <!-- <p>Total: <span>0</span></p> -->
                    </div>
                </div>
            </div>
            <div class="tituloHistoricoDeEstoque">
                <h2>Usuários Cadastrados</h2>
            </div>
            <div class="areaHistoricoDeEstoque">
                <table class="tabelaHistoricoDeProdutos">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Estado</th>
                            <th>Perfil</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Colorir & Estampar</td>
                            <td>colorir&estampar@teste.com</td>
                            <td>Ativo</td>
                            <td>Admin</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Caneca</td>
                            <td>Caneca Personalizada</td>
                            <td>R$35</td>
                            <td>Venda</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Caneca</td>
                            <td>Caneca Personalizada</td>
                            <td>R$35</td>
                            <td>Venda</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Caneca</td>
                            <td>Caneca Personalizada</td>
                            <td>R$35</td>
                            <td>Venda</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Caneca</td>
                            <td>Caneca Personalizada</td>
                            <td>R$35</td>
                            <td>Venda</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Caneca</td>
                            <td>Caneca Personalizada</td>
                            <td>R$35</td>
                            <td>Venda</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Caneca</td>
                            <td>Caneca Personalizada</td>
                            <td>R$35</td>
                            <td>Venda</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Caneca</td>
                            <td>Caneca Personalizada</td>
                            <td>R$35</td>
                            <td>Venda</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Caneca</td>
                            <td>Caneca Personalizada</td>
                            <td>R$35</td>
                            <td>Venda</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Garrafa Squeeze</td>
                            <td>Squeeze Personalizada</td>
                            <td>R$35</td>
                            <td>Garrafa</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
        <div class="sectionEspecial">
            <div class="sectionEspecialConteudo">
            
            </div>
        </div>
    
    ` 
}

function addUsuario(){
    const section = document.querySelector('.sectionEspecial');
    section.style.display = 'flex';
    const conteudo = document.querySelector('.sectionEspecialConteudo');
    conteudo.innerHTML = ` 
         <div class="btnFechar" onclick="fecharMenu()">
                                <i class="fa-solid fa-xmark" style="color: #f4f4f2;"></i>
                    </div>
                            <h2>Cadastrar Usuário</h2>
                            <form action="">
                                <div class="inputSectionEspecial">
                                    <input type="text"  placeholder="Nome"  required>
                                    <i class="fa-solid fa-user" style="color: #f4f4f2;"></i>
                                </div>
                                <div class="inputSectionEspecial">
                                    <input type="email" placeholder="Email" required>
                                    <i class="fa-solid fa-envelope" style="color: #f4f4f2;"></i>
                                </div>
                                <div class="inputSectionEspecial">
                                    <input type="password" placeholder="Senha">
                                    <i class="fa-solid fa-key" style="color: #f4f4f2;"></i>
                                </div>
                                <div class="inputSectionEspecial">
                                    <i class="fa-solid fa-user-shield" style="color: #f4f4f2;"></i>
                                    <select name="" id="" required>
                                        <option disabled selected value="">Selecione o Perfil</option>
                                        <option value="Admin">Admin</option>
                                        <option value="Padrao">Padrão</option>
                                    </select>
                                </div>
                                <div class="conteudoEscUsuario" >
                                    <div class="usuarioDispEsc">
                                        <input type="radio"  name="dispDeEstoque" value="Disponivel" required>
                                        <label for="">Disponível</label>
                                    </div>
                                    <div class="usuarioDispEsc">
                                        <input type="radio" name="dispDeEstoque"  value="Disponivel" required>
                                        <label for="">Indisponível</label>
                                    </div>
                                </div>
                                <div class="btnSubmit">
                                    <input type="submit" value="Salvar">
                                </div>
                            </form>
    
    `
}


function atualizarUsuario(){
    const section = document.querySelector('.sectionEspecial');
    section.style.display = 'flex';
    const conteudo = document.querySelector('.sectionEspecialConteudo');
    conteudo.innerHTML = `
    <div class="btnFechar" onclick="fecharMenu()">
                    <i class="fa-solid fa-xmark" style="color: #f4f4f2;"></i>
            </div>
                <h2>Atualizar Usuário</h2>
                <form action="">
                    <div class="inputSectionEspecial">
                        <input type="text"  placeholder="Nome"  required>
                        <i class="fa-solid fa-user" style="color: #f4f4f2;"></i>
                    </div>
                    <div class="inputSectionEspecial">
                        <input type="email" placeholder="Email" required>
                        <i class="fa-solid fa-envelope" style="color: #f4f4f2;"></i>
                    </div>
                    <div class="inputSectionEspecial">
                        <input type="password" placeholder="Senha">
                        <i class="fa-solid fa-key" style="color: #f4f4f2;"></i>
                    </div>
                    <div class="inputSectionEspecial">
                        <i class="fa-solid fa-user-shield" style="color: #f4f4f2;"></i>
                        <select name="" id="" required>
                            <option disabled selected value="">Selecione o Perfil</option>
                            <option value="Admin">Admin</option>
                            <option value="Padrao">Padrão</option>
                        </select>
                    </div>
                    <div class="conteudoEscUsuario" >
                        <div class="usuarioDispEsc">
                            <input type="radio"  name="dispDeEstoque" value="Disponivel" required>
                            <label for="">Disponível</label>
                        </div>
                        <div class="usuarioDispEsc">
                            <input type="radio" name="dispDeEstoque"  value="Disponivel" required>
                            <label for="">Indisponível</label>
                        </div>
                    </div>
                    <div class="btnSubmit">
                        <input type="submit" value="Salvar">
                    </div>
                </form>
            </div>
        </div>    
    ` 
}


function deletarUsuario(){
    const section = document.querySelector('.sectionEspecial');
    section.style.display = 'flex';
    const conteudo = document.querySelector('.sectionEspecialConteudo');
    conteudo.innerHTML = `
        <div class="btnFechar" onclick="fecharMenu()">
                <i class="fa-solid fa-xmark" style="color: #f4f4f2;"></i>
        </div>
            <h2>Deletar Usuário ?</h2>
           
                <div class="escolhaSelecionada">
                    
                        <div class="dadoSelecionado">
                            <span>ID:</span>
                            <label for="">3</label>
                        </div>
                    
                        <div class="dadoSelecionado">
                            <span>Nome:</span>
                            <label for="">Glauber Vinicius</label>
                        </div>
                    
                        <div class="dadoSelecionado">
                            <span>Email:</span>
                            <label for="">gvinidsdsds@teste.com</label>
                        </div>
                </div>

                <div class="Decisao">
                    <button type="button" value="sim">Sim</button>
                    <button type="button" value="nao">Não</button>
                </div>
            </div>
    
    ` 
}


function permissaoUsuario(){
    const section = document.querySelector('.sectionEspecial')
    section.style.display = 'flex';
    const conteudo = document.querySelector('.sectionEspecialConteudo');
    conteudo.innerHTML = `
    <div class="btnFechar" onclick="fecharMenu()">
                    <i class="fa-solid fa-xmark" style="color: #f4f4f2;"></i>
                </div>

                <div class="tituloPermissao">
                    <h3>Permissão</h3>
                    <h4>Colorir & Estampar</h4>
                </div>

                <div class="subTituloPermissao">
                    <span>Usuário</span>
                    <span>Estoque</span>
                </div>

                <div class="inpp">
                    <div class="colunaPermissao">
                        <div class="areaInputsPermissao">
                            <div class="inputsPermissao">
                                <div class="caixaInputPermissao
                      ">
                                    <input type="checkbox" value="Salvar">
                                    <label>Salvar</label>
                                </div>
                                <div class="caixaInputPermissao
                      ">
                                    <input type="checkbox" value="SomenteSeusDados">
                                    <label>Somente Seus Dados</label>
                                </div>
                                <div class="caixaInputPermissao
                      ">
                                    <input type="checkbox" value="BuscarTodos">
                                    <label>Buscar Todos</label>
                                </div>
                                <div class="caixaInputPermissao
                      ">
                                    <input type="checkbox" value="Remove">
                                    <label>Remove</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="colunaPermissao">
                        <div class="areaInputsPermissao">
                            <div class="inputsPermissao">
                                <div class="caixaInputPermissao
                      ">
                                    <input type="checkbox" value="Salvar">
                                    <label>Salvar</label>
                                </div>
                                <div class="caixaInputPermissao
                      ">
                                    <input type="checkbox" value="Remover">
                                    <label>Remover</label>
                                </div>
                                <div class="caixaInputPermissao
                      ">
                                    <input type="checkbox" value="Todohistórico">
                                    <label>Todo Histórico</label>
                                </div>
                                <div class="caixaInputPermissao
                      ">
                                    <input type="checkbox" value="SomenteOseu">
                                    <label>Somente o seu</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="subTituloPermissao">
                    <span>Produto</span>
                    <span>Categoria</span>
                </div>

                <div class="inpp">
                    <div class="colunaPermissao">
                        <div class="areaInputsPermissao">
                            <div class="inputsPermissao">
                                <div class="caixaInputPermissao
                      ">
                                    <input type="checkbox" value="Salvar">
                                    <label>Salvar</label>
                                </div>
                                
                                <div class="caixaInputPermissao
                      ">
                                    <input type="checkbox" value="Remover">
                                    <label>Remover</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="colunaPermissao">
                        <div class="areaInputsPermissao">
                            <div class="inputsPermissao">
                                <div class="caixaInputPermissao
                      ">
                                    <input type="checkbox" value="Salvar">
                                    <label>Salvar</label>
                                </div>
                                
                                <div class="caixaInputPermissao
                      ">
                                    <input type="checkbox" value="Remover">
                                    <label>Remover</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>

                <div class="subTituloPermissao">
                    <span>Venda</span>
                    <span>Permissão</span>
                </div>

                <div class="inpp">
                    <div class="colunaPermissao">
                        <div class="areaInputsPermissao">
                            <div class="inputsPermissao">
                                <div class="caixaInputPermissao
                      ">
                                    <input type="checkbox" value="Salvar">
                                    <label>Salvar</label>
                                </div>

                                <div class="caixaInputPermissao
                      ">
                                    <input type="checkbox" value="atulizar">
                                    <label>Atualizar</label>
                                </div>
                                
                                <div class="caixaInputPermissao
                      ">
                                    <input type="checkbox" value="Remover">
                                    <label>Remover</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="colunaPermissao">
                        <div class="areaInputsPermissao">
                            <div class="inputsPermissao">
                                <div class="caixaInputPermissao
                      ">
                                    <input type="checkbox" value="Salvar">
                                    <label>Salvar</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>

                <div class="subTituloPermissao">
                    <span>Cliente</span>
                </div>

                <div class="inpp">
                    <div class="colunaPermissao">
                        <div class="areaInputsPermissao">
                            <div class="inputsPermissao">
                                <div class="caixaInputPermissao
                      ">
                                    <input type="checkbox" value="remover">
                                    <label>Remover</label>
                                </div>

                </div>

                <div class="DecisaoPermissao">
                    <button type="button" value="salvar">Salvar</button>
                </div>
            </div>
        </div>
    
    ` 
}


//controle da table mostrando qual linha está selecionada 

document.addEventListener('DOMContentLoaded', function () {
    // Seleciona todas as linhas da tabela, exceto o cabeçalho
    const linhas = document.querySelectorAll('.tabelaHistoricoDeProdutos tbody tr');

    // Adiciona um evento de clique para cada linha da tabela
    linhas.forEach(function (linha) {
        linha.addEventListener('click', function () {
            // Primeiro, remove a classe 'piscando' de todas as linhas
            linhas.forEach(l => l.classList.remove('piscando'));

            // Adiciona a classe 'piscando' à linha clicada
            linha.classList.add('piscando');

            // Exibe os dados da linha no console (opcional)
            const dadosDaLinha = [];
            const colunas = linha.getElementsByTagName('td');
            for (let i = 0; i < colunas.length; i++) {
                dadosDaLinha.push(colunas[i].textContent);
            }
            console.log('Dados da linha selecionada:', dadosDaLinha);
        });
    });
});
