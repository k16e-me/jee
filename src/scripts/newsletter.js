import _encode from './encode'
import { _q, _ql } from './snips'
import Botpoison from '@botpoison/browser'


export default function _newsletterSubmit() {
    if (!_q('[data-form-submit]')) return

    const submitButtons = _ql('[data-form-submit]')

    submitButtons.forEach(b => {
        const
            button = b,
            formWrapper = button.closest('[data-newsletter]'),
            form = _q('form', formWrapper),
            endpoint = form.getAttribute('form-id'),
            buttonContent = _q('.will-swap', form),
            spinner = _q('.to-swap', form),
            submitted = _q('.form-submitted', formWrapper),
            success = _q('.on-success', submitted),
            error = _q('.on-error', submitted),
            onSubmit = () => {
                form.reset()
                button.classList.remove('disabled')
                buttonContent.style.opacity = 1
                spinner.style.opacity = 0
                form.style.cssText = `
                transform: translateY(-1rem);
                opacity: 0;
                display: none;
            `
                submitted.style.display = 'block'
            },
            onSubmitSuccess = () => {
                success.style.cssText = `
                transform: translateY(0);
                opacity: 1;
            `
                error.style.display = 'none'
            },
            onSubmitError = () => {
                error.style.cssText = `
                transform: translateY(0);
                opacity: 1;
            `
                success.style.display = 'none'
            }

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
                    onSubmit()
                    onSubmitSuccess()
                } else {
                    onSubmit()
                    onSubmitError()
                }
            })
        }
    })
}