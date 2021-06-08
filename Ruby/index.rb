case name

    when "Jiyon"
        puts "Hi! Jiyon!"
    when "Eric"
        puts "Hi! Eric!"
    else
        puts "Whats' your name?"
end

if letter == "a" || letter == 'e'
    "vowel"
else
    "not a vowel"
end

def vowels(letter)
    case letter
    when > "a"
        true
    when > "b"
        true
    else
        false
    end
end

def greet_user(name)
    puts "Hello, #{name}"
end

10.times do
    puts "Hi!"
end

loop do
    puts "Hi"
end

String Interpolation
Using the #{} is called interpolation. 
x = 1
while x < 10
  puts "#{x} is less than 10"
  x += 1
end

x += 1 is the same as the line x = x + 1

my_array = []

my_array = Array.new

puppies = ["bulldog", "terrier", "poodle"]

puppies[1] => "terrier"
puppies.index("poodle")

def create_empty_array
    []
end

def create_array
    ["one", 2, true]
end

puppies.sort
puppies.reverse
puppies.include?("poodle")
puppies.first
puppies.last
puppies.size

basket = ["apple1", "apple2", "apple3"]


basket.each do |apple|
    puts "Taking out #{apple}"
end

basket.each{|apple| puts "Taking out #{apple}"}

array.join(",")

array[-1].insert(0, "and ")

def line(deli)
    if deli.empty?
      puts "The line is currently empty."
    else
      current_line = "The line is currently:"
      #.each.with_index(1)<----Starting index
      deli.each.with_index(1) do |person, i|
        current_line << " #{i}. #{person}"
      end
      puts current_line
    end
  end

  def hamburger(toppings)
    toppings.map do |topping|
        puts " I love #{topping} on my burgers!"
    end
end
#.map and .collect return [nil, nil, nil]

def reverse_word(sentence)
    sentence.split.map { |word| word.reverse}.join(" ")
end

["Tim", "Tom", "Jim"].each do |name|
    if name.start_with?("T")
      puts "Hi, #{name}"
    end
  end

  #binding.pry
