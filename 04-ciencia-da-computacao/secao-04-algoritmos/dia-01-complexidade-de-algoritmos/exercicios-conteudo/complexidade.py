from datetime import datetime

def multiply_arrays(array1, array2, array3, array4):
    result = []
    number_of_iterations = 0
    for number1 in array1:
        start = datetime.now()
        for number2 in array2:
            for number3 in array3:
                for number4 in array4:
                    result.append(number1 * number2 * number3 * number4)
                    number_of_iterations += 1
        finish = datetime.now()
        total_time = round((finish.microsecond - start.microsecond) / 10000, 2)


    print(f'{number_of_iterations} iterações!')   
    print(f'Tempo de execução: {total_time} segundos')

    return result



# Usar arrays de tamanho 1000 aqui pode ser muito lento!

meu_array = list(range(1, 1000))

multiply_arrays(meu_array, meu_array, meu_array, meu_array)