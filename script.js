function choosePath(option) {
  const storyText = document.getElementById('storyText');
  const sceneImage = document.getElementById('sceneImage');

  // Primeira camada de escolhas
  if (option === 'explorar o templo') {
    storyText.innerText = 'Você explora o templo e encontra um pergaminho antigo escondido sob uma estátua de um dragão dourado. O que você fará com ele?';
    sceneImage.src = 'dragon_temple.jpg';
    updateChoices('abrir o pergaminho', 'deixar o pergaminho', 'fazer uma prece');
  } else if (option === 'descer até a vila') {
    storyText.innerText = 'Você desce até a vila e percebe que os moradores estão em pânico por causa de um terremoto recente. Você pode ajudar de alguma forma?';
    sceneImage.src = 'village.jpg';
    updateChoices('ajudar moradores', 'voltar para o templo', 'seguir para o mercado');
  } else if (option === 'entrar na floresta') {
    storyText.innerText = 'Você entra na floresta densa e silenciosa. O som de pássaros e o farfalhar das folhas trazem uma sensação de mistério. No entanto, um caminho bifurca à frente. Qual você seguirá?';
    sceneImage.src = 'forest.jpg';
    updateChoices('seguir o caminho da esquerda', 'seguir o caminho da direita', 'voltar para o templo');
  }

  // Exploração do templo
  else if (option === 'abrir o pergaminho') {
    storyText.innerText = 'Ao abrir o pergaminho, um brilho dourado preenche o ambiente. Você sente uma força antiga fluindo. O que fará?';
    sceneImage.src = 'scroll.jpg';
    updateChoices('usar o poder do pergaminho', 'destruir o pergaminho', 'consultar um sábio sobre o poder');
  } else if (option === 'deixar o pergaminho') {
    storyText.innerText = 'Você decide não mexer no pergaminho, mas enquanto se vira, ouve um som ecoando pelo templo. Algo ou alguém está observando você. O que fará?';
    sceneImage.src = 'shadow.jpg';
    updateChoices('investigar o som', 'sair imediatamente do templo', 'continuar explorando o templo');
  } else if (option === 'fazer uma prece') {
    storyText.innerText = 'Você faz uma prece no templo e sente uma paz profunda. Um monge aparece e oferece-lhe sabedoria. Ele lhe pergunta se deseja aprender os segredos do templo ou seguir seu caminho.';
    sceneImage.src = 'monk.jpg';
    updateChoices('ficar no templo e aprender', 'seguir seu caminho', 'falar mais com o monge');
  }

  // Desfechos do pergaminho
  else if (option === 'usar o poder do pergaminho') {
    storyText.innerText = 'Ao usar o poder do pergaminho, uma energia intensa percorre seu corpo, mas também atrai forças sombrias. Agora você deve decidir se usará essa força para o bem ou para o mal.';
    sceneImage.src = 'power.jpg';
    updateChoices('usar o poder para o bem', 'usar o poder para o mal', 'renunciar ao poder e destruí-lo');
  } else if (option === 'destruir o pergaminho') {
    storyText.innerText = 'Você destrói o pergaminho, libertando o templo de seu poder. No entanto, ao fazer isso, você desperta um espírito antigo que estava preso. O que fará?';
    sceneImage.src = 'spirit.jpg';
    updateChoices('enfrentar o espírito', 'fugir do templo', 'tentar selar o espírito novamente');
  }

  // Caminhos na floresta
  else if (option === 'seguir o caminho da esquerda') {
    storyText.innerText = 'O caminho da esquerda leva a um lago cristalino. A água parece sobrenatural e, ao se aproximar, uma criatura mística emerge da água. O que você fará?';
    sceneImage.src = 'lake.jpg';
    updateChoices('falar com a criatura', 'sair do lago e voltar', 'entrar no lago');
  } else if (option === 'seguir o caminho da direita') {
    storyText.innerText = 'O caminho da direita leva a uma clareira onde uma antiga árvore com símbolos mágicos está. A árvore parece pulsar com energia. O que fará?';
    sceneImage.src = 'tree.jpg';
    updateChoices('tocar a árvore mágica', 'voltar para o caminho principal', 'acampar na clareira');
  }

  // Vila e mercado
  else if (option === 'ajudar moradores') {
    storyText.innerText = 'Você ajuda os moradores a reconstruir suas casas. Em gratidão, eles lhe oferecem abrigo. Um ancião conta sobre uma caverna sagrada nas montanhas. Você decide explorá-la?';
    sceneImage.src = 'cave.jpg';
    updateChoices('explorar a caverna', 'voltar para a vila', 'seguir para o mercado');
  } else if (option === 'seguir para o mercado') {
    storyText.innerText = 'No mercado, você vê uma multidão reunida em torno de um samurai que faz uma demonstração de sua técnica. Você se aproxima e ele lhe dá um olhar profundo. O que fará?';
    sceneImage.src = 'market.jpg';
    updateChoices('falar com o samurai', 'assistir à demonstração', 'voltar para a vila');
  }

  // Finalizações de diferentes caminhos
  else if (option === 'usar o poder para o bem') {
    storyText.innerText = 'Você decide usar o poder para ajudar as pessoas ao seu redor. Com o tempo, você se torna um herói lendário, conhecido por seus feitos e sabedoria. O povo do Japão sempre lembrará de você.';
    sceneImage.src = 'hero.jpg';
    updateChoices('recomeçar a aventura');
  } else if (option === 'usar o poder para o mal') {
    storyText.innerText = 'Ao usar o poder para o mal, você espalha caos e destruição. No entanto, o poder consome sua alma e, eventualmente, você se torna uma sombra do que foi, amaldiçoado para sempre.';
    sceneImage.src = 'evil.jpg';
    updateChoices('recomeçar a aventura');
  } else if (option === 'enfrentar o espírito') {
    storyText.innerText = 'Você decide enfrentar o espírito com coragem. A batalha é intensa, mas você consegue selá-lo novamente. Agora, o templo está seguro e você parte como um verdadeiro guerreiro.';
    sceneImage.src = 'battle.jpg';
    updateChoices('recomeçar a aventura');
  }

  // Outros desfechos
  else if (option === 'falar com a criatura') {
    storyText.innerText = 'A criatura do lago revela segredos antigos sobre o mundo. Com sua sabedoria, você retorna à civilização como um grande estudioso. Sua vida será dedicada ao conhecimento.';
    sceneImage.src = 'creature.jpg';
    updateChoices('recomeçar a aventura');
  } else if (option === 'tocar a árvore mágica') {
    storyText.innerText = 'Ao tocar a árvore mágica, você absorve seu poder, ganhando habilidades místicas. Agora, você tem o poder da natureza ao seu dispor. O que fará com isso depende de você.';
    sceneImage.src = 'tree_power.jpg';
    updateChoices('recomeçar a aventura');
  }
}

function updateChoices(choice1, choice2, choice3) {
  document.getElementById('choices').innerHTML = `
    <button onclick="choosePath('${choice1}')">${choice1}</button>
    <button onclick="choosePath('${choice2}')">${choice2}</button>
    <button onclick="choosePath('${choice3}')">${choice3}</button>
  `;
}
