
# Currency Converter

A simple currency converter application that allows users to convert between different currencies. Enjoy! Note: It was assignment i was asked to made by my friend so I made it for institutional purpose...

## Features

- Convert between various currencies.
- Real-time exchange rates.
- User-friendly interface.

## Getting Started

1. **Clone this repository**:

    ```bash
    git clone https://github.com/your-username/currency-converter.git
    ```

2. **Navigate to the project directory**:

    ```bash
    cd currency-converter
    ```

3. **Install dependencies**:

    - No npm or other package manager is required for this project.

4. **Configure your Apache2 server**:

    - Make sure you have Apache2 installed and running on your local machine.
    - Create a virtual host configuration for your currency converter project. For example, create a file named `currency-converter.conf` in the `/etc/apache2/sites-available/` directory:

        ```apache
        <VirtualHost *:80>
            ServerName currency-converter.local
            DocumentRoot /path/to/currency-converter/dist
            ErrorLog ${APACHE_LOG_DIR}/error.log
            CustomLog ${APACHE_LOG_DIR}/access.log combined
        </VirtualHost>
        ```

    - Enable the virtual host:

        ```bash
        sudo a2ensite currency-converter.conf
        ```

    - Restart Apache2:

        ```bash
        sudo systemctl restart apache2
        ```

5. **Build the project**:

    - No build step is needed for this project.

6. **Access the application**:

    Open your web browser and navigate to [http://currency-converter.local](http://currency-converter.local).

## Usage

1. Select the base currency from the dropdown.
2. Enter the amount you want to convert.
3. Choose the target currency.
4. Click the "Convert" button to see the converted amount.

## Contributing

Contributions are welcome! If you find any issues or have suggestions, feel free to open an issue or submit a pull request.
Queries at: jashannandha04@gmail.com

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Remember to replace placeholders with actual information, such as your GitHub username, project paths, and server configuration. Happy coding! 🚀
