module.exports = (req, res, next) => {
    // cookie: CGIC=IocBdGV4dC9odG1sLGFwcGxpY2F0aW9uL3hodG1sK3htbCxhcHBsaWNhdGlvbi94bWw7cT0wLjksaW1hZ2UvYXZpZixpbWFnZS93ZWJwLGltYWdlL2FwbmcsKi8qO3E9MC44LGFwcGxpY2F0aW9uL3NpZ25lZC1leGNoYW5nZTt2PWIzO3E9MC45; CONSENT=YES+ES.en+V9; HSID=AAs8RtzjTC2umSW-c; SSID=A3J5l_kY7IJDWCQct; APISID=Cmt0R_m5tZaz5mD9/A9V2lT8E-kkj-lWFV; SAPISID=seRSeVtK8zyanc_5/AfKgW2jFMQHDgU-nm; __Secure-3PAPISID=seRSeVtK8zyanc_5/AfKgW2jFMQHDgU-nm; SID=2Qf-R2N8tywANXYDZVZxWzdMxK7QnsuyNATJenEZilxPGCC9ElKy3UclK4M-xOG7aATLJA.; __Secure-3PSID=2Qf-R2N8tywANXYDZVZxWzdMxK7QnsuyNATJenEZilxPGCC9CHTnZDVMTo_tibgDm_aAWw.; OTZ=5703836_52_52_123900_48_436380; NID=204=lJ4EbnJ0niywWC35M3v0t612m5zhVAeDyMtOTe0iHsb-pnO7cU4zun9iq7XsZ9tNr4GJW0s6k5GhRUaTtuoV-riAUS8r8bvIlS3sySaTgsXPQCUZhwT6b-02-3pusFHrzl5CDybLykwMuQgXw1Dd4fVB91fbjHlcvCDxGX4jhv_6MacD2dA-9UjakgNyi7qEWp8Zu8ZcprmzNvtQdhQb3iY5doZN9hminKiiJK7bgzwrLEe228cwvqIVqYnLQvx6l0_I927zYhXiyxCI5AVvnvjNGQ; SIDCC=AJi4QfHX8B-QdxkWpOo2HkYySajNzQxraIasjLzNm53RkauA-X57X_WLc5qxVkhwEYRfncZqTQ; __Secure-3PSIDCC=AJi4QfGyq1oCCXUA5A2IToEsBE-wNDqKqeVxqmSy4XyCdswOB7BtOocDVhiOH4bAWUHTv2MiiA; ANID=AHWqTUmEEQrsMAGAPTL0-uJL8ZBDTdgfmoK1QQPH9mUcO87IKcNGqC8n_O-obKJp; 1P_JAR=2020-11-12-12; DV=cxMnNJIfPHAt4I4-5ZYxV2rADZXFW1c8_s6VasskMwMAAAA; UULE=a+cm9sZTogMQpwcm9kdWNlcjogMTIKdGltZXN0YW1wOiAxNjA1MTgyNzc1MDk3MDAwCmxhdGxuZyB7CiAgbGF0aXR1ZGVfZTc6IDQxNDIyMDI4OAogIGxvbmdpdHVkZV9lNzogMjE1NjEzNDQKfQpyYWRpdXM6IDQ3ODU1OTQwCnByb3ZlbmFuY2U6IDYK
    const cookie = req.get('cookie')

    const cookies = {}

    if (cookie) {
        const keyValues = cookie.split(';')

        for (const keyValue of keyValues) {
            const [key, value] = keyValue.split('=')

            cookies[key.trim()] = value
        }
    }

    req.cookies = cookies

    next()
}