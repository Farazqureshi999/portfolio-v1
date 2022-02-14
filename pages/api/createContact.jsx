import sanityClient from '@sanity/client'

const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    useCdn: process.env.NODE_ENV === 'production',
    token: process.env.SANITY_API_TOKEN
};

const client = sanityClient(config);

export default async function createContact (req, res) {
    const {name, email, message,created_at} = JSON.parse(req.body);
    try {
        await client.create({
            _type: 'contact',
            name,
            email,
            created_at,
            message,
            
        })
    } catch (err) {
        return res
            .status(500)
            .json({message: `Could not submit the form`, err})
    }
    res.status(200).json({
      message:'Form Successfully Submit',
      data:{
        name,
        email,
        message,
        created_at
      }
    })
}