import _encode from './encode'
import { _q, _ql } from './snips'
import Botpoison from '@botpoison/browser'


export default function _newsletterSubmit() {
    if (!_q('[data-form-submit]')) return

    const
        button = _q('[data-form-submit]'),
        form = button.closest('form'),
        endpoint = form.getAttribute('form-id'),
        buttonContent = _q('.will-swap', form),
        spinner = _q('.to-swap', form)

    form.addEventListener('submit', submit)

    async function submit(e) {
        e.preventDefault()

        const
            form = e.target,
            data = new FormData(form),
            botpoison = new Botpoison({
                publicKey: 'pk_8276f265-d7ed-4f62-bf80-ef7f0088a1b9'
            })

        button.classList.add('disabled')
        buttonContent.style.opacity = 0
        spinner.style.opacity = 1
        const { solution } = await botpoison.challenge()

        await fetch(`https://submit-form.com/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            },
            body: _encode({
                ...Object.fromEntries(data),
                _botpoison: solution
            })
        }).then(res => {
            if (res.status === 200) {
                form.reset()
                button.classList.remove('disabled')
                buttonContent.style.opacity = 1
                spinner.style.opacity = 0
                // swap form for success message
            } else {
                button.classList.remove('disabled')
                buttonContent.style.opacity = 1
                spinner.style.opacity = 0
                // swap form for error message
            }
        })
    }
}