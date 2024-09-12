
function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
          <div>
          <h2 className="text-white text-lg font-semibold mb-4">Про нас</h2>
          <p className="mb-4">
          Музична школа є провідним закладом, присвяченим навчанні мистецтва і науки музики. Ми розвиваємо таланти з основ, сприяючи створенню живої спільноти музикантів.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Швидкі посилання</h2>
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Головна
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Про нас
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Курси
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Контакти
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Слідуйте за нами</h2>
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Зв'яжіться з нами</h2>
          <p>Київ, Україна</p>
          <p>Київ 10001</p>
          <p>Email: info@musicschool.com</p>
          <p>Phone: (050) 860-8026</p>
        </div>

          </div>
          
          <p className="text-center text-xs pt-8">© 2024 Музична школа. Усі права захищені.</p>
    </footer>
  )
}

export default Footer
