#include <fstream>
#include <sstream>
#include <string>
#include <stdexcept>

std::string ReadFileToString(const std::string &file_name) {
    std::ifstream file(file_name, std::ios::binary | std::ios::ate);
    
    if (!file) {
        throw std::runtime_error("Failed to open file: " + file_name);
    }
    
    std::streamsize size = file.tellg();
    file.seekg(0, std::ios::beg);

    std::string buffer(size, ' ');
    
    if (!file.read(&buffer[0], size)) {
        throw std::runtime_error("Failed to read file: " + file_name);
    }

    return buffer;
}
