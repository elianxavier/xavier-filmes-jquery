$(document).ready(function () {
    function renderFilmes(filmes) {
        const filmesContainer = $('#filmes-container');

        filmes.filmes.forEach(function (filme) {
            const filmeSection = $('<section>').addClass('filme');
            const nome = $('<h2>').text(filme.nome);
            const gênero = $('<p>').text('Gênero: ' + filme.gênero);
            const sinopse = $('<p>').text('Sinopse: ' + filme.sinopse);
            const anoLancamento = $('<p>').text('Ano de Lançamento: ' + filme.ano_lancamento);
            const linguasDisponiveis = $('<p>').text('Línguas Disponíveis: ' + filme.linguas_disponiveis.join(', '));
            
            filmeSection.append(nome, gênero, sinopse, anoLancamento, linguasDisponiveis);
            filmesContainer.append(filmeSection);
        });
    }

    $.getJSON('base/filmes.json', function (data) {
        renderFilmes(data);
    });
});
