phrase = """O módulo de CS é bom demais,
 as dicas pythônicas fazer ficar melhor ainda."""

vowels = "aeiou"

# vowels_list = []

# consonant_list = []

# for letter in phrase:
#   if letter in vowels:
#     vowels_list.append(letter)

# for letter in phrase:
#   if letter not in vowels:
#     consonant_list.append(letter)


vowels_list_v2 = [letter for letter in phrase if letter in vowels]
consonant_list_v2 = [letter for letter in phrase if letter not in vowels]
teste = "Ahá!"

print(
    f"""Vowels list: {vowels_list_v2}

Consonant list: {consonant_list_v2}

Xablau! {teste}"""
)
