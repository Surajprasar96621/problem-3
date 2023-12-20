def to_lower(char):
  if ord('A') <= ord(char) <= ord('Z'):
    return chr(ord(char) + 32)
  else:
    return char

def to_lower_word(word):
  return ''.join([to_lower(c) for c in word])

def to_lower_array(string_array):
  return [to_lower_word(word) for word in string_array]


test_strings = ["MA", "SA", "I", "SCH", "OOL"]
lower_strings = to_lower_array(test_strings)

print("Original strings:", test_strings)
print("Lowercase strings:", lower_strings)
