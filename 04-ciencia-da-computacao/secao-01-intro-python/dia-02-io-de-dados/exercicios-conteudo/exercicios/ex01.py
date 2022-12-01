# Faça um programa que solicite o nome de uma 
# pessoa usuária e imprima-o na vertical. Exemplo:
# 
# F
# U
# L
# A
# N
# O

username = input('Digite seu nome: ')
print('')

for letter in username:
  print(letter.upper())
