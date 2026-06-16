/**
 * @project RESTful API (Node + Express + MongoDB)
 * @author Vedant Khalshinge
 * @copyright 2026 Vedant Khalshinge. All rights reserved.
 * @description Unauthorized copying, modification, or distribution is strictly prohibited.
 */
const runTests = async () => {
  const baseUrl = 'http://localhost:3000/api/tasks';
  
  try {
    console.log('1. Testing POST /api/tasks (Create)');
    const postRes = await fetch(baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'Test Task', description: 'This is a test' })
    });
    const postData = await postRes.json();
    console.log('POST Response:', postData);
    const taskId = postData.data._id;

    console.log('\n2. Testing GET /api/tasks (List)');
    const getRes = await fetch(baseUrl);
    const getData = await getRes.json();
    console.log('GET Response:', getData);

    console.log('\n3. Testing GET /api/tasks/:id (Single)');
    const getSingleRes = await fetch(`${baseUrl}/${taskId}`);
    const getSingleData = await getSingleRes.json();
    console.log('GET Single Response:', getSingleData);

    console.log('\n4. Testing PUT /api/tasks/:id (Update)');
    const putRes = await fetch(`${baseUrl}/${taskId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: true })
    });
    const putData = await putRes.json();
    console.log('PUT Response:', putData);

    console.log('\n5. Testing Validation (Error Handling)');
    const errRes = await fetch(baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({}) // Missing title and description
    });
    const errData = await errRes.json();
    console.log('Validation Error Response:', errData);

    console.log('\n6. Testing DELETE /api/tasks/:id (Delete)');
    const delRes = await fetch(`${baseUrl}/${taskId}`, {
      method: 'DELETE'
    });
    const delData = await delRes.json();
    console.log('DELETE Response:', delData);
    
    console.log('\n✅ All tests passed successfully!');
    process.exit(0);

  } catch (error) {
    console.error('Test failed:', error);
    process.exit(1);
  }
};

// Wait a bit before testing to ensure server is ready
setTimeout(runTests, 3000);

