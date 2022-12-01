import sys

if __name__ == "__main__": # uma boa explicação para isso: https://www.alura.com.br/artigos/o-que-significa-if-name-main-no-python
    for argument in sys.argv:
        print("Received -> ", argument, sep='***teste para modificar o separador***')

# rodar no terminal: python3 test_sys_argv.py 2 4 "teste"