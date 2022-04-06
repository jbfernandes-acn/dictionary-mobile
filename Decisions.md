
# Decisões tomadas
Este documento enumera algumas decisões tomadas na construção do projeto, com respetivas justificações.


## Background da aplicação
De forma a aplicar o mesmo background em todas as páginas, baseado no componente LinearGradient da biblioteca Expo, criei um componente (GradientBackground) que devolve o LinearGradient, já parametrizado com as cores pretendidas, e declara os estilos necessários para ajustar o background ao ecrã. Desta forma, não tenho que repetir o mesmo código em todas as páginas.

## Biblioteca de UI
Para facilitar o desenvolvimento de algumas partes da UI, utilizei a biblioteca React Native Paper, que possui alguns componentes pré-definidos.

## Storage
Para guardar a lista de favoritos no dispositivo, utilizei uma solução de armazenamento persistente.

## Obtenção de dados
A lista de favoritos é apresentada na página de favoritos. No entanto, esta lista também é necessária na página de detalhe de uma palavra. Visto que a lista tem que ser acedida em páginas diferentes, coloquei a instrução de dispatch da ação de obtenção da lista de favoritos no componente App. Desta forma, independentemente da página à qual se aceda primeiro (favoritos ou detalhe), teremos sempre acesso à lista de favoritos.


